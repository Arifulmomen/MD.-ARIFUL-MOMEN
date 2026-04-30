import { motion } from "motion/react";
import { Zap, ShieldCheck, UtensilsCrossed } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "EXTREME SPEED",
      description: "Our average delivery time is just 20 minutes. We value your time as much as you do.",
      icon: <Zap className="w-8 h-8 text-black" />,
      color: "bg-white"
    },
    {
      title: "URBAN ICONS",
      description: "We partner with top-rated local restaurants to bring you the best variety of cuisines.",
      icon: <UtensilsCrossed className="w-8 h-8 text-black" />,
      color: "bg-accent"
    },
    {
      title: "TOTAL SAFETY",
      description: "Safe and secure payment methods with contactless delivery for your peace of mind.",
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      color: "bg-white"
    }
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-pattern" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-left mb-20 space-y-4">
          <h2 className="editorial-heading text-5xl md:text-7xl text-white">Why Foody Go?</h2>
          <p className="text-white/60 font-bold uppercase tracking-widest text-sm">Engineered for the modern city dweller.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${feature.color} editorial-card p-12 hover:scale-[1.02] cursor-default group`}
            >
              <div className="bg-black w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transform group-hover:rotate-12 transition-transform shadow-xl">
                 <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-6 text-black">{feature.title}</h3>
              <p className="text-black/60 font-bold uppercase text-[11px] leading-relaxed tracking-widest">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
