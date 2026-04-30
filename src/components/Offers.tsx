import { motion } from "motion/react";
import { Smartphone, Apple, PlayCircle } from "lucide-react";

export default function Offers() {
  return (
    <section id="offers" className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          whileInView={{ scale: [0.98, 1] }}
          viewport={{ once: true }}
          className="bg-black rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 bg-pattern opacity-10" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-accent text-black px-4 py-1.5 rounded font-black text-[10px] uppercase tracking-widest mb-10">
                Exclusive Invitation
              </div>
              <h2 className="editorial-heading text-6xl md:text-8xl mb-8 leading-[0.9]">
                Save <span className="text-primary italic">$10</span> on <br />
                First Order.
              </h2>
              <p className="text-white/60 text-lg font-bold uppercase tracking-widest mb-12 max-w-md">
                Download now and use code <span className="bg-accent text-black px-4 py-1 rounded inline-block font-black ml-2 animate-pulse">WELCOME10</span>
              </p>
              
              <div className="flex flex-wrap gap-6">
                <button className="bg-white text-black px-10 py-5 rounded-3xl font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl">
                  App Store
                </button>
                <button className="bg-primary text-white px-10 py-5 rounded-3xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all shadow-xl">
                  Google Play
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <motion.div
                animate={{ 
                  y: [15, -15, 15],
                  rotate: [3, -3, 3]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=800&auto=format&fit=crop" 
                  alt="App Preview"
                  className="w-full max-w-sm mx-auto rounded-[3rem] shadow-3xl border-[12px] border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              {/* Brutalist floating elements */}
              <div className="absolute top-0 right-0 bg-accent text-black p-4 rounded font-black uppercase text-xs rotate-12 shadow-xl">No Fees</div>
              <div className="absolute bottom-20 left-0 bg-primary text-white p-4 rounded font-black uppercase text-xs -rotate-12 shadow-xl">20 Mins</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
