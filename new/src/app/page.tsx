"use client";

import {
  ActiveSectionProvider,
  useActiveSectionContext,
} from "./activeContext";
import Home from "./home";
import About from "./about";
import Resume from "./resume";
import Education from "./education";
import Projects from "./projects";
import Contact from "./connect";
import { useEffect, useRef } from "react";
import SidebarNavigation from "./SideBarNavigation";

export default function App() {
  return (
    <ActiveSectionProvider>
      <div className="flex flex-col lg:flex-row lg:h-screen m-auto lg:w-screen">
        <div className="p-4 flex lg:p-0">
          <SidebarNavigation />
        </div>

        <main className="flex-1 p-4 lg:p-8">
          <Content />
        </main>
      </div>
    </ActiveSectionProvider>
  );
}

function Content() {
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
      className="block outline-gray-900 outline-1 backdrop-blur-3xl bg-gray-950  w-full md:overflow-x-visible overflow-x-hidden md:h-full h-screen overflow-scroll p-10 rounded-2xl text-white"
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
