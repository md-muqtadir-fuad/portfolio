import { motion } from "motion/react";
import { Mail, MapPin, Send, Github, Linkedin, Globe, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { siteContent } from "../constants";
import React, { useState } from "react";
import { db, handleFirestoreError, OperationType } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("loading");
    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
      handleFirestoreError(error, OperationType.CREATE, "messages");
    }
  };

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 font-display">
            Let's <span className="text-emerald-600 italic">Connect</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl">
            Have a question or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-transparent flex items-center justify-center shrink-0">
                  <Mail className="text-emerald-600" size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Email</h3>
                  {/*<a href={`mailto:${siteContent.email}`} className="text-lg font-semibold text-zinc-900 hover:text-emerald-600 transition-colors">
                    {siteContent.email}
                  </a>*/}
                  <a href = "#"  
                  onClick = {(e) => e.preventDefault()} 
                  className = "text-lg font-semibold text-zinc-900 hover:text-emerald-600 transition-colors">
                    mmfuad01 [at] gmail [dot] com
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-transparent flex items-center justify-center shrink-0">
                  <MapPin className="text-emerald-600" size={28} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Location</h3>
                  <p className="text-lg font-semibold text-zinc-900">{siteContent.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Socials</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Github />, url: siteContent.links.github, label: "GitHub" },
                  { icon: <Linkedin />, url: siteContent.links.linkedin, label: "LinkedIn" },
                  { icon: <Globe />, url: siteContent.links.orcid, label: "ORCID" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 space-y-6">
            {status === "success" && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md flex items-start gap-3 text-emerald-800">
                <CheckCircle2 className="shrink-0 mt-0.5" size={20} />
                <p className="text-sm font-medium">Thank you! Your message has been sent successfully. I'll get back to you soon.</p>
              </div>
            )}
            
            {status === "error" && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-3 text-red-800">
                <AlertCircle className="shrink-0 mt-0.5" size={20} />
                <p className="text-sm font-medium">{errorMessage}</p>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-500 ml-2">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-white border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-500 ml-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-white border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-500 ml-2">Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can I help you?"
                className="w-full px-4 py-2 bg-white border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-2 bg-emerald-600 text-white rounded-md font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>Sending... <Loader2 size={18} className="animate-spin" /></>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}