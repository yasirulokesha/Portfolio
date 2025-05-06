"use client";

import { useActiveSectionContext } from "./activeContext";
import Home from "./home";
import About from "./about";
import Resume from "./resume";
import Education from "./education";
import Projects from "./projects";
import Contact from "./connect";

function App() {
  const { active } = useActiveSectionContext();

  return (
    <div className="block outline-gray-900 outline-1 backdrop-blur-3xl bg-gray-950  w-full md:overflow-x-visible overflow-x-hidden h-full overflow-scroll p-10 rounded-2xl text-white">
      {active === "home" ? (
        <Home />
      ) : active === "about" ? (
        <About />
      ) : active === "resume" ? (
        <Resume />
      ) : active === "education" ? (
        <Education />
      ) : active === "projects" ? (
        <Projects />
      ) : active === "contact" ? (
        <Contact />
      ) : (
        <p>Please select a section from the sidebar</p>
      )}
    </div>
  );
}

export default App;
