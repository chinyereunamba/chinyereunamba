import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Intro from "@/components/layout/Intro";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}
