import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skill/skills";
import Works from "./components/Works/works";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/projects";
import Certificates from "./components/certificates/certificates";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Experience />
      {/* <Skills /> */}
      <Certificates />
      {/* <Works /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
