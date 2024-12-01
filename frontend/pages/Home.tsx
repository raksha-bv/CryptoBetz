import Navbar from "@/components/Navbar";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero2";
import Games from "@/components/Games";

const Home = () => {
  return (
    <main className="text-white min-h-screen relative">
      <Navbar />
      <Hero />

      <Features />
      <Games />
      <Faq />
      <Footer />
    </main>
  );
};

export default Home;
