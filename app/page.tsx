import Image from "next/image";
import { Navbar } from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import { TimelineDemo } from "@/components/TimelineDemo";
import LogoAnimation from "@/components/LogoAnimation";
import Contact from "@/components/Contact";
import Stack from "@/components/Stack";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ProjectsSection/>
    <TimelineDemo/>
    <Stack/>
    <LogoAnimation/>
    <Contact/>
    <Footer/>
    </>
  );
}
