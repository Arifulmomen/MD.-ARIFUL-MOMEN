import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PopularFoods from "./components/PopularFoods";
import HowItWorks from "./components/HowItWorks";
import Offers from "./components/Offers";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PopularFoods />
        <HowItWorks />
        <Offers />
      </main>
      <Footer />
    </div>
  );
}

