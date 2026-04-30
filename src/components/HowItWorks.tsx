import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "PICK CRAVING",
      description: "Browse thousands of dishes from local icons to your favorite national chains."
    },
    {
      num: "02",
      title: "ORDER LIVE",
      description: "Orders are prepared and monitored in real-time. Know exactly where your food is."
    },
    {
      num: "03",
      title: "EAT FAST",
      description: "Your delivery hero arrives within minutes. Hot food, fresh and ready to eat."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 bg-pattern" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="editorial-heading text-5xl md:text-8xl mb-8">
              Order magic <br />
              <span className="text-primary italic">in 3 steps.</span>
            </h2>
            <p className="text-white/60 text-xl font-bold uppercase tracking-widest mb-12 max-w-lg">
              Frictionless. Fast. Fresh.
            </p>
            <button className="bg-white text-black px-12 py-6 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-primary hover:text-white transition-all shadow-2xl">
              Get Started Now
            </button>
          </div>

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex gap-8 group"
              >
                <div className="font-display font-black text-6xl text-white/10 group-hover:text-primary transition-colors duration-500 italic">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-3">{step.title}</h3>
                  <p className="text-white/50 font-bold uppercase text-xs tracking-widest leading-loose">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
