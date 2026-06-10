import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main>
      <Navbar />
     
      <Hero />
       <About />
       <Projects />
       <Blogs />
       <Contact />
    </main>
  );
}
