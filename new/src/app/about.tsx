"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import img from "@/assets/Asset 3.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightCircle, ArrowUpRight } from "lucide-react";
import { useActiveSectionContext } from "./activeContext";
import Education from "./education";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { setActive } = useActiveSectionContext();

  const imageRef = useRef(null);
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const taglineRef = useRef(null);
  const sectionRef = useRef<HTMLElement[]>([]);

  const skillSet = [
    { skill: "C/ C#", progress: "90" },
    { skill: "NextJS/ ReactJS", progress: "80" },
    { skill: "Android/ Kotlin", progress: "80" },
    { skill: "Firebase", progress: "70" },
    { skill: "AWS/ Azure", progress: "60" },
    { skill: "Python", progress: "80" },
    { skill: "Vue", progress: "70" },
    { skill: "Tailwind/ Bootsrap/ MUI", progress: "90" },
  ];

  const addSectionRef = (section: HTMLElement | null) => {
    if (section && !sectionRef.current.includes(section)) {
      sectionRef.current.push(section);
    }
  };
  // Initial animation on component mount
  useEffect(() => {
    // Initial entrance animation
    const tl = gsap.timeline();

    tl.fromTo(
      [fNameRef.current, lNameRef.current, taglineRef.current].filter(Boolean),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.2,
        scale: 1,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.4)",
        delay: 0,
      }
    );

    sectionRef.current.forEach((section, index) => {
      tl.fromTo(
        section,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "sine",
        }
      );
    });

    if (lNameRef.current) {
      tl.fromTo(
        lNameRef.current,
        { rotate: 0 },
        {
          rotate: 2,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 ">
      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap md:flex-row items-between justify-center w-full mb-24 pt-16">
          <div className="flex-1 m-auto w-full">
            <h1
              ref={fNameRef}
              className="text-6xl md:text-8xl font-serif font-bold text-gray-100 tracking-tight"
            >
              About
            </h1>
            <h2
              ref={lNameRef}
              className="text-5xl md:text-4xl font-bold text-blue-500 tracking-tight -mt-1"
            >
              Yasiru Lokesha
            </h2>
            <div
              ref={taglineRef}
              className=" text-xl font-medium text-gray-300 max-w-md"
            >
              <p>
                Passionate developer creating intuitive digital experiences with
                clean code and creative solutions.
              </p>
            </div>
          </div>
          <div ref={imageRef} className="flex">
            <Image src={img} alt="img" className="max-w-100 absolute z-10" />
            <div className="flex -inset-4 bg-blue-500/20 rounded-full blur-3xl animate-pulse">
              <Image src={img} alt="img" className="max-w-100 " />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Sections */}
      <div className="space-y-15">
        <div ref={addSectionRef} className="my-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-100 flex items-center">
            Who Am I
            <ArrowUpRight className="ml-2 text-blue-400" size={24} />
          </h1>
          <p className="max-w-full font-medium p-8 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg text-gray-200 border border-gray-700/50">
            I'm a passionate and detail-oriented software developer with
            hands-on experience in full-stack development, UI/UX design, and
            mobile application development. I enjoy creating efficient,
            scalable, and user-friendly applications using technologies like
            React, Next.js, Firebase, and Kotlin. I have also worked on
            real-time dashboards, cloud-based systems, and cross-platform apps,
            focusing on clean code and great user experiences. I thrive in
            collaborative environments and continuously seek opportunities to
            learn and grow as a developer.
          </p>
        </div>

        {/* Skills Section */}
        <div ref={addSectionRef} className="my-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-100 flex items-center">
            My Skills
            <ArrowUpRight className="ml-2 text-blue-400" size={24} />
          </h1>
          <div className="max-w-full p-8 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg text-gray-200 border border-gray-700/50">
            <p className="font-medium pb-8">
              I specialize in modern web technologies including React, Next.js,
              and TypeScript for frontend development. On the backend, I work
              with Node.js, Express, and various database solutions including
              MongoDB and Firebase. I'm also proficient in mobile development
              with React Native and Kotlin. My toolkit includes GSAP for
              animations, Tailwind CSS for styling, and Git for version control.
              I'm constantly expanding my skillset to stay current with industry
              trends.
            </p>

            <div className="block columns-2 gap-10 grid-rows-4 w-full">
              {skillSet.map((skill, index) => {
                return (
                  <div key={index} className="mb-4 w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-white">
                        {skill.skill}
                      </span>
                      <span className="text-sm font-medium text-white">
                        {skill.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              className="button mt-8 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transform transition-all duration-300 hover:scale-105 shadow-lg flex items-center group"
              onClick={() => setActive("projects")}
            >
              Explore Projects
              <ArrowRightCircle className="ml-2 transition-transform group-hover:translate-x-1 " />
            </button>
          </div>
        </div>

        {/* Education Section */}
        <div ref={addSectionRef} className="my-10">
          <h1 className="text-3xl md:text-4xl mb-8 font-bold text-gray-100 flex items-center">
            Educational Roadmap
            <ArrowUpRight className="ml-2 text-blue-400" size={24} />
          </h1>
          {/* <div className="max-w-full p-8 mb-5 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg text-gray-200 border border-gray-700/50">
            <p className="font-medium pb-8">
              I'm currently pursuing a Bachelor's degree in Computer Science at
              Swinburne University, where I've developed a strong foundation in
              algorithms, data structures, software engineering principles, and
              modern development practices. My academic journey has equipped me
              with both theoretical knowledge and practical skills that I apply
              to real-world projects. I'm particularly focused on web
              technologies and interactive applications, maintaining a high GPA
              while actively participating in coding competitions and
              hackathons.
            </p>
            <button
              type="button"
              className="button bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transform transition-all duration-300 hover:scale-105 shadow-lg flex items-center group"
              onClick={() => setActive("education")}
            >
              Education Roadmap
              <ArrowRightCircle className="ml-2 transition-transform group-hover:translate-x-1 " />
            </button>
          </div> */}
          <Education />
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="button bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl transform transition-all duration-300 hover:scale-105 shadow-lg flex items-center group"
          onClick={() => setActive("connect")}
        >
          Let's Connect
          <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </div>
  );
}
