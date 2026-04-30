import { motion } from "motion/react";
import { Star, ArrowRight } from "lucide-react";

export default function PopularFoods() {
  const foods = [
    {
      name: "Truffle Beast",
      price: "$12.50",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
      tag: "POPULAR NOW",
      color: "bg-white text-black"
    },
    {
      name: "Street Ramen",
      price: "$8.99",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop",
      tag: "BEST VALUE",
      color: "bg-accent text-black"
    },
    {
      name: "Neon Sushi",
      price: "$22.00",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop",
      tag: "TRENDING",
      color: "bg-black text-white"
    },
    {
      name: "Urban Pizza",
      price: "$15.50",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
      tag: "MUST TRY",
      color: "bg-white text-black"
    }
  ];

  return (
    <section id="menu" className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="editorial-heading text-5xl md:text-7xl text-white">Top Rated <br />Urban Kitchens.</h2>
            <p className="text-white font-bold opacity-80 text-lg uppercase tracking-widest">Selected for your fast-paced lifestyle.</p>
          </div>
          <button className="bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
            See Filtered Menu
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {foods.map((food, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${food.color} editorial-card p-6 rotate-${idx % 2 === 0 ? '1' : '-1'} hover:rotate-0 group cursor-pointer`}
            >
              <div className="relative mb-6 aspect-square overflow-hidden rounded-[30px]">
                <img 
                  src={food.image} 
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-6 shadow-xl"
                />
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded font-black text-[10px] tracking-tighter uppercase">
                  {food.tag}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-none">{food.name}</h3>
                  <p className="text-xl font-black">{food.price}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-black text-sm">{food.rating}</span>
                  </div>
                  <button className="bg-primary text-white w-10 h-10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
