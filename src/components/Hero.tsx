import { motion } from "motion/react";
import { Smartphone, Star, AppWindow } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-primary selection:bg-black selection:text-white">
      {/* Editorial Grid Base */}
      <div className="absolute inset-0 bg-pattern" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 lg:col-span-7 space-y-10"
        >
          <div className="space-y-6">
            <span className="inline-block bg-accent text-black px-4 py-1.5 rounded text-xs font-black uppercase tracking-tighter shadow-lg">
              50% OFF YOUR FIRST ORDER
            </span>
            <h1 className="editorial-heading text-7xl md:text-[110px] text-white">
              Fast Food, <br />
              Fast Life.
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-lg opacity-90 leading-relaxed text-white/90">
              Get the freshest meals from urban kitchens delivered to your door in under 20 minutes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-5 rounded-3xl flex items-center gap-4 shadow-2xl hover:scale-105 transition-transform group">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center p-2 group-hover:bg-primary transition-colors">
                <Smartphone className="text-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] opacity-60 leading-none uppercase font-black tracking-widest">Get it on</div>
                <div className="text-xl font-black leading-none uppercase tracking-tighter">App Store</div>
              </div>
            </button>
            <button className="bg-black text-white px-8 py-5 rounded-3xl flex items-center gap-4 shadow-2xl hover:scale-105 transition-transform group border border-white/10">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-2 group-hover:bg-primary transition-colors">
                <Smartphone className="text-black group-hover:text-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] opacity-60 leading-none uppercase font-black tracking-widest text-white/50">Download on</div>
                <div className="text-xl font-black leading-none uppercase tracking-tighter">Google Play</div>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4">
             <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-primary bg-white/20 backdrop-blur-sm overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="User" />
                  </div>
                ))}
             </div>
             <div className="text-sm font-black uppercase tracking-widest">
                <span className="text-black bg-white px-2 py-0.5 rounded mr-2">4.9/5</span> 
                From 20k+ Reviews
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 lg:col-span-5 relative"
        >
          <div className="space-y-6">
             <div className="bg-white p-8 rounded-[40px] text-black shadow-2xl transform rotate-3 hover:rotate-0 transition-transform cursor-pointer group">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-black uppercase">Popular Now</span>
                  <span className="text-3xl font-black tracking-tighter">$12.50</span>
                </div>
                <h3 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-3">Truffle Beast Burger</h3>
                <p className="text-sm font-medium opacity-60 mb-6 max-w-xs">Double beef patty, truffle mayo, and crispy onions from Urban Grill.</p>
                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs group-hover:bg-black transition-colors">Add to Order</button>
             </div>

             <div className="bg-accent p-8 rounded-[40px] text-black shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer group">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-black text-accent px-4 py-1 rounded-full text-xs font-black uppercase">Best Value</span>
                  <span className="text-3xl font-black tracking-tighter">$8.99</span>
                </div>
                <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-3 font-display">Street Style Ramen</h2>
                <p className="text-sm font-medium opacity-80 mb-6 max-w-xs">Spicy miso broth, 12-hour pork belly, soft egg. A city favorite.</p>
                <button className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs group-hover:bg-primary transition-colors">Add to Order</button>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
