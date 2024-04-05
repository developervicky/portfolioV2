"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Container from "./container";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";



export default function Home() {
  return (
        <main className="h-screen">
          <MobileNavbar />
          <Navbar />
          <Container>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
            <Footer />
          </Container>
        </main>
  );
}
