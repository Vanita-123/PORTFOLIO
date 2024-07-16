import About from "../Components/About/About";
import Hero from "../Components/Home/Hero";
import Skills from "../Components/Skills/Skills";
import Project from "../Components/Project/Project";
import Contact from "../Components/Contact/Contact";
function Home() {
  return (
    <div className="bg-zinc-900 text-white px-10 py-12">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
