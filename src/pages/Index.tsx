import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Calculator } from "@/components/Calculator";
import { CallToAction } from "@/components/CallToAction";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Calculator />
        <CallToAction />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
