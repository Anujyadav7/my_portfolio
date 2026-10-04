import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Creators from "./components/Creators";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-950 selection:text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Creators />
      <Contact />
    </main>
  );
}
