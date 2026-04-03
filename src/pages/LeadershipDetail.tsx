import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { experienceData } from "../data/experienceData";
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function LeadershipDetail() {
  const { slug } = useParams();
  const leadershipItem = experienceData.leadership.find((item) => item.slug === slug);

  if (!leadershipItem) {
    return (
      <div className="pt-32 pb-16 px-4 text-center space-y-8">
        <h1 className="text-4xl font-bold font-display">Page Not Found</h1>
        <Link to="/experience" className="text-emerald-600 font-bold hover:underline">
          Back to Experience
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <Link
          to="/experience"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-600 transition-colors font-medium"
        >
          <ArrowLeft size={18} /> Back to Experience
        </Link>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 font-display">
            {leadershipItem.title}
          </h1>
          <h2 className="text-2xl text-emerald-600 font-medium">
            {leadershipItem.organization}
          </h2>
          
          <div className="flex flex-wrap gap-6 text-zinc-500 font-medium">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{leadershipItem.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{leadershipItem.location}</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {leadershipItem.detailedDescription && (
            <section className="space-y-6">
              <h3 className="text-2xl font-bold font-display">About the Role</h3>
              <div className="prose prose-zinc max-w-none">
                {leadershipItem.detailedDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-zinc-600 leading-relaxed text-lg mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          )}

          <section className="space-y-6">
            <h3 className="text-2xl font-bold font-display">Key Responsibilities & Achievements</h3>
            <div className="grid gap-4">
              {leadershipItem.bullets.map((point, i) => (
                <div key={i} className="flex gap-4 p-5 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={24} />
                  <p className="text-zinc-700 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}