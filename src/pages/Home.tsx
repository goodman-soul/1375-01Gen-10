import { LinkageProvider } from "@/context/LinkageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MineHistory from "@/components/MineHistory";
import EquipmentGrid from "@/components/EquipmentGrid";
import RailwaySection from "@/components/RailwaySection";
import LivingQuarters from "@/components/LivingQuarters";
import VisitGuide from "@/components/VisitGuide";
import OralHistory from "@/components/OralHistory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LinkageProvider>
      <div className="min-h-screen bg-charcoal text-lamp_white font-body selection:bg-rust selection:text-lamp_white">
        <Header />
        <main>
          <Hero />
          <MineHistory />
          <EquipmentGrid />
          <RailwaySection />
          <LivingQuarters />
          <VisitGuide />
          <OralHistory />
        </main>
        <Footer />
      </div>
    </LinkageProvider>
  );
}
