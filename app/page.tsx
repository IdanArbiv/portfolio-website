import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/layout/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Publications from "./components/Publications";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Experience />
      <Education />
      <Publications />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
