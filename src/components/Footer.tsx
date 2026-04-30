import { ShoppingBag, Instagram, Facebook, Twitter, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/10 pt-12">
        <div className="flex gap-12 lg:gap-24 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-3xl">⚡</span>
            <div>
              <div className="text-[10px] text-white/50 uppercase font-black tracking-widest">Delivery</div>
              <div className="text-xs font-black uppercase">20 Mins Avg.</div>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-3xl">📍</span>
            <div>
              <div className="text-[10px] text-white/50 uppercase font-black tracking-widest">Network</div>
              <div className="text-xs font-black uppercase">500+ Kitchens</div>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-3xl">💸</span>
            <div>
              <div className="text-[10px] text-white/50 uppercase font-black tracking-widest">Fees</div>
              <div className="text-xs font-black uppercase">$0 Delivery</div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <span>•</span>
          <span className="text-primary animate-pulse italic">Support 24/7</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-between items-center border-t border-white/5 pt-8">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-sm rotate-45"></div>
          </div>
          <span className="font-black text-lg uppercase tracking-tighter">Foody Go</span>
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest opacity-20 group-hover:opacity-100">© 2026 Urban Delivery Inc.</p>
      </div>
    </footer>
  );
}
