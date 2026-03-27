import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import PronounGrid from "@/components/PronounGrid";
import GrammarSection from "@/components/GrammarSection";
import StoriesSection from "@/components/StoriesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <PronounGrid />
        <GrammarSection />
        <StoriesSection />
      </main>
      <Footer />
    </>
  );
}
