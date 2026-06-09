import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Valori from "@/components/Valori";
import SectionSeparator from "@/components/SectionSeparator";
import Camere from "@/components/Camere";
import Appartamenti from "@/components/Appartamenti";
import Spiagge from "@/components/Spiagge";
import Recensione from "@/components/Recensione";
import RichiediDisponibilita from "@/components/RichiediDisponibilita";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <SectionSeparator />
      <Valori />
      <SectionSeparator />
      <Camere />
      <SectionSeparator />
      <Appartamenti />
      <SectionSeparator />
      <Spiagge />
      <SectionSeparator />
      <Recensione />
      <RichiediDisponibilita />
      <Footer />
    </>
  );
}
