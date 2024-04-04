import Navbar from "@/components/Navbar";
import Image from "next/image";
import Container from "./container";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />
      <Container>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </Container>
    </main>
  );
}
