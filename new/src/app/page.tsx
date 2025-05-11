"use client";

import { useActiveSectionContext } from "./activeContext";
import Home from "./home";
import About from "./about";
import Resume from "./resume";
import Education from "./education";
import Projects from "./projects";
import Contact from "./connect";
import { useEffect, useRef } from "react";

function App() {
  const { active } = useActiveSectionContext();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll the container to the top when the active section changes
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [active]);

  return (
    <div
      ref={scrollRef}
      className="block outline-gray-900 outline-1 backdrop-blur-3xl bg-gray-950  w-full md:overflow-x-visible overflow-x-hidden h-full overflow-scroll p-10 rounded-2xl text-white"
    >
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
