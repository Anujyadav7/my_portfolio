import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Creators from "./components/Creators";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
       <Navbar />
       
       <Hero />

       <section id="projects">
         <Projects />
       </section>
       
       <section id="skills">
         <Skills />
       </section>
       
       <section id="collaborations">
         <Creators />
       </section>
       
       <section id="contact">
         <Contact />
       </section>
    </main>
  );
}
