import { motion } from "motion/react";
import { achievementsData } from "../data/achievementsData";
import { Award, ExternalLink, MapPin } from "lucide-react";

export default function Achievements() {
  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 font-display">
            Certificates & <span className="text-emerald-600 italic">Achievements</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl">
            A collection of my certifications, awards, and notable accomplishments.
          </p>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto pt-8">
          {achievementsData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-8 md:gap-12 w-full border-b border-zinc-200 pb-16 last:border-0"
            >
              {/* Left Column: Date & Image */}
              <div className="md:w-1/4 space-y-4 shrink-0">
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                  {item.year} — {item.month}
                </div>
                <div 
                  className={`overflow-hidden ${
                    item.imageOrientation === 'vertical' ? 'aspect-[3/4] max-w-[200px]' : 'aspect-[4/3] w-full'
                  }`}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover rounded-none border border-zinc-200" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="flex-1 space-y-4 flex flex-col">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-zinc-900 font-display">
                    {item.title} <span className="text-zinc-500 font-normal">— {item.issuer}</span>
                  </h3>
                </div>
                
                <div className="text-zinc-700 leading-relaxed">
                  {item.description}
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <MapPin size={16} className="text-emerald-600" />
                    <span>{item.place}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-zinc-500 text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.link && (
                    <div className="pt-2">
                      <a 
                        href={item.link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group"
                      >
                        <ExternalLink size={16} /> {item.link.label}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}