"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import img from "@/assets/Asset 5.png";

import gsap from "gsap";
import { ArrowUpRight, GithubIcon } from "lucide-react";

export default function Projects() {
  const imageRef = useRef(null);
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const taglineRef = useRef(null);
  const sectionRef = useRef<HTMLElement[]>([]);

  const project_list = [
    {
      project_name: "Medi Plus",
      tools: "ReactJs | BS5",
      preview: "/projects/medi_plus.png",
      description:
        "A prototype for Doctor channeling system. The project has created with ReactJS and styled with Boostrap5.",
      link: "https://github.com/yasirulokesha/MediPlus",
    },
    {
      project_name: "Job Vacancy Posting",
      tools: "PHP",
      preview: "none",
      description:
        "A dynamic web application built with PHP that allows employers to post job vacancies and job seekers to browse and apply for available positions.",
      link: "https://github.com/yasirulokesha/Job-Vacancy-Posting-System.git",
    },
    {
      project_name: "Relaxing Koala",
      tools: "C#",
      preview: "none",
      description:
        "A system for getting reservations/ make orders/ invoicing and etc. The system prototype will help to manage a resturant.",
      link: "https://github.com/yasirulokesha/Relaxing_koala.git",
    },
    {
      project_name: "kilan Powder Coatings",
      tools: "ReacJS | MUI",
      preview: "none",
      description: "",
      link: "https://github.com/yasirulokesha/kilan_powder_coatings.git",
    },
    {
      project_name: "NFT Trading Platform Prototype",
      tools: "ReacJS | Python | Solidity",
      preview: "none",
      description:
        "It is a prototype for NFT trading platform. The site is trying to achieve, every functional requirements of a trading platform.",
      link: "https://github.com/yasirulokesha/NFT-Trading-platform.git",
    },
    {
      project_name: "TripLocate",
      tools: "Kotlin | Firebase",
      preview: "none",
      description:
        "TripLocate is a user-friendly Android application designed to enhance the travel experience by helping users discover and manage tourist destinations.",
      link: "https://github.com/yasirulokesha/TripLocate.git",
    },
    {
      project_name: "Tree-Based Search Algorithms",
      tools: "Python | Jupyter Notebook",
      preview: "none",
      description:
        "This project is an implementation of various tree-based search algorithms to solve the Route Finding Problem.",
      link: "https://github.com/yasirulokesha/IntroToAI-Assignment-2.git",
    },
  ];

  const add_sections = (el: HTMLElement | null) => {
    if (el) {
      sectionRef.current.push(el);
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

    sectionRef.current.forEach((section) => {
      tl.fromTo(
        section,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          ease: "power4.in",
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
      <div className="flex flex-col flex-wrap">
        <div className="flex flex-col md:flex-row items-between justify-center w-full mb-24 pt-16 ">
          <div className="flex-1 m-auto w-full">
            <h1
              ref={fNameRef}
              className="text-6xl md:text-8xl font-serif font-bold text-gray-100 tracking-tight"
            >
              Projects
            </h1>
            <h2
              ref={lNameRef}
              className="text-5xl md:text-4xl font-bold text-blue-500 tracking-tight -mt-1"
            >
              Explore my world
            </h2>
            <div
              ref={taglineRef}
              className=" text-xl font-medium text-gray-300 max-w-md"
            >
              <p>
                Passionate developer creating intuitive digital experiences with
                clean code and creative solutions.
              </p>
              <button
                type="button"
                className="button max-w-50 flex align-middle items-center justify-center bg-transparent outline outline-offset-2 hover:bg-gray-600 text-white font-semibold text-[12pt] py-2 px-6 my-4 rounded-md transform transition-all duration-300 shadow-lg"
              >
                Explore
                <GithubIcon className="ml-4" />
              </button>
            </div>
          </div>
          <div ref={imageRef} className="flex">
            <Image
              src={img}
              alt="img"
              className="md:max-w-150 w-100 absolute z-10"
            />
            <div className="flex -inset-4 bg-blue-500/20 rounded-full blur-3xl animate-pulse">
              <Image src={img} alt="img" className="md:max-w-150 w-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-start gap-10 w-full h-fit">
        {project_list.map((project, index) => {
          return (
            <div
              ref={add_sections}
              key={index}
              className="flex flex-col md:m-0 m-auto bg-gray-800/80 round-xl max-h-100 h-100 w-80 max-w-80 rounded-xl outline-gray-700 outline-1 p-4 hover:scale-105 duration-300 "
            >
              {project.preview != "none" ? (
                <img
                  src={project.preview}
                  alt={`${project.project_name} Preview`}
                  className="rounded-md hover:scale-105 duration-300 shadow-2xl drop-shadow-lg"
                />
              ) : (
                <div className="w-full bg-gray-500/2 outline-1 outline-gray-700 rounded-md h-40 flex items-center justify-center">
                  <span className="text-gray-500">Preview not uploaded</span>
                </div>
              )}
              <div className="flex-1">
                <h1 className="text-xl font-extrabold mt-3">
                  {project.project_name}
                </h1>
                <h5 className="text-sm font-semibold "> {project.tools}</h5>
                <p className="max-w-full text-sm font-medium text-gray-200 py-2">
                  {project.description}
                </p>
              </div>
              <div className="mb-0">
                <button
                  type="button"
                  className="button w-full flex align-middle items-center justify-center bg-transparent outline outline-offset-2 hover:bg-gray-600 text-white font-semibold text-[12pt] py-2 px-6 my-4 rounded-md transform transition-all duration-300 shadow-lg"
                  onClick={() => {
                    window.open(project.link, "_blank", "noopener,noreferrer");
                  }}
                >
                  View Project
                  <GithubIcon className="ml-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center flex-row mt-8">
        <button
          type="button"
          className="button bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl transform transition-all duration-300 hover:scale-105 shadow-lg flex items-center group"
          onClick={() => {
            window.open(
              "https://github.com/yasirulokesha",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          Explore more
          <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </div>
  );
}
