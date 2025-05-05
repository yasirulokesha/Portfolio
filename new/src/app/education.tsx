"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import img from "@/assets/Asset 4.png";

import RichmondCrest from "@/assets/richmond_crest.svg";
import SwinburneCrest from "@/assets/swinburne_crest.svg";
import GoogleLogo from "@/assets/google_logo.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightCircle, ArrowUpRight } from "lucide-react";
import { useActiveSectionContext } from "./activeContext";

export default function Education() {
  const imageRef = useRef(null);
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const taglineRef = useRef(null);
  const sectionRef = useRef(null);
  const stepsRef = useRef<HTMLElement[]>(null);

  const { setActive } = useActiveSectionContext();

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
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
        delay: 0,
      }
    );
    tl.fromTo(
      sectionRef,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: "sine",
      }
    );

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
    <div className="max-w-6xl mx-auto">
      {/* <div className="flex md:flex-row items-between justify-center w-full pt-9">
        <div className="flex-1 m-auto w-full">
          <h1
            ref={fNameRef}
            className="text-6xl md:text-8xl font-serif font-bold text-gray-100 tracking-tight"
          >
            Education
          </h1>
          <h2
            ref={lNameRef}
            className="text-5xl md:text-4xl font-bold text-blue-500 tracking-tight -mt-1"
          >
            Roadmap
          </h2>
        </div>
        <div ref={imageRef} className="flex">
          <Image src={img} alt="img" className="max-w-100 absolute z-10" />
          <div className="flex -inset-4 bg-blue-500/20 opacity-0.2 rounded-full blur-3xl animate-pulse">
            <Image src={img} alt="img" className="max-w-100 " />
          </div>
        </div>
      </div> */}
      <div className="relative flex w-full h-[55vh] p-4 justify-center items-center">
        <span className="absolute block h-3 w-[55vh] rotate-90 bg-gray-700 rounded-full"></span>
        <div className="absolute flex justify-end items-center -translate-y-[20vh] -translate-x-50 w-100 h-fit pt-4">
          <div className="flex flex-col mr-0 -translate-x-25 items-end justify-center">
            <Image src={RichmondCrest} className="w-15" alt="crest 1" />
            <h1 className="text-sm font-semibold">2008 - 2021</h1>
            <h1 className="font-bold text-xl hidden md:block">
              Richmond College
            </h1>
            <p className="max-w-100 text-balance text-right hidden md:block">
              Best ICT Performer in 2019 of the college.<br/>
              Conducted an event 2020 (KNGINE 21)
            </p>
          </div>

          <span className="absolute right-0 block h-3 w-20 bg-gray-700 rounded-full ">
            <span className="absolute rounded-full bg-blue-500 w-7 h-7 -translate-y-2"></span>
            <span className="absolute rounded-full w-8 h-8 -translate-y-[10px] -translate-x-[2px]  outline-3 outline-blue-800 hover:outline-8 duration-200 animate-ping"></span>
          </span>
        </div>

        <div className="absolute flex justify-start items-center translate-x-50 -translate-y-40 w-100 h-fit">
          <span className="absolute left-0 block h-3 w-20 rotate-180 bg-gray-700 rounded-full ">
            <span className="absolute rounded-full bg-blue-500 w-7 h-7 -translate-y-2"></span>
            <span className="absolute rounded-full w-8 h-8 -translate-y-[10px] -translate-x-[2px]  outline-3 outline-blue-800 hover:outline-8 duration-200 animate-ping"></span>
          </span>
          <div className="flex flex-col mr-0 translate-x-25 items-start">
            <Image src={SwinburneCrest} className="w-20 my-3" alt="crest 1" />
            <h1 className="text-sm font-semibold">2022</h1>
            <h1 className="font-bold text-xl hidden md:block">
              Swinburne University of Technology
            </h1>
            <h1 className="max-w-100 text-wrap text-left hidden md:block">
              Acomplished a Diploma in IT
            </h1>
          </div>
        </div>

        <div className="absolute flex justify-end items-center translate-y-5 -translate-x-50 w-100 h-fit">
          <div className="flex flex-col mr-0 -translate-x-25 items-end">
            <Image src={SwinburneCrest} className="w-20 my-3" alt="crest 1" />
            <h1 className="text-sm font-semibold">20022 - 2025</h1>
            <h1 className="font-bold text-xl hidden md:block">
              Swinburne University of Technology
            </h1>
            <h1 className="max-w-100 text-wrap text-right hidden md:block">
              Pursuing a Bachelor's Degree in Computer Science
            </h1>
          </div>

          <span className="absolute right-0 block h-3 w-20 bg-gray-700 rounded-full ">
            <span className="absolute rounded-full bg-blue-500 w-7 h-7 -translate-y-2"></span>
            <span className="absolute rounded-full w-8 h-8 -translate-y-[10px] -translate-x-[2px]  outline-3 outline-blue-800 hover:outline-8 duration-200 animate-ping"></span>
          </span>
        </div>

        <div className="absolute flex justify-start items-center translate-x-50 translate-y-30 w-100 h-fit">
          <span className="absolute left-0 block h-3 w-20 rotate-180 bg-gray-700 rounded-full ">
            <span className="absolute rounded-full bg-blue-500 w-7 h-7 -translate-y-2"></span>
            <span className="absolute rounded-full w-8 h-8 -translate-y-[10px] -translate-x-[2px]  outline-3 outline-blue-800 hover:outline-8 duration-200 animate-ping"></span>
          </span>
          <div className="flex flex-col mr-0 translate-x-25 items-start">
            <Image src={GoogleLogo} className="w-15 -ml-2" alt="crest 1" />
            <h1 className="text-sm font-semibold">2025</h1>
            <h1 className="font-bold text-xl">Google</h1>
            <h1 className="max-w-100 text-wrap text-left hidden md:block">
              Following a Technical Support Course
            </h1>
          </div>
        </div>
      </div>
      <div ref={sectionRef} className="my-10">
        <h1 className="text-3xl md:text-4xl mb-8 font-bold text-gray-100 flex items-center">
          Summary
          <ArrowUpRight className="ml-2 text-blue-400" size={24} />
        </h1>
        <div className="max-w-full p-8 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg text-gray-200 border border-gray-700/50">
          <p className="font-medium pb-8">
            I'm currently pursuing a Bachelor's degree in Computer Science at
            Swinburne University, where I've developed a strong foundation in
            algorithms, data structures, software engineering principles, and
            modern development practices. My academic journey has equipped me
            with both theoretical knowledge and practical skills that I apply to
            real-world projects. I'm particularly focused on web technologies
            and interactive applications, maintaining a high GPA while actively
            participating in coding competitions and hackathons.
          </p>
          <button
            type="button"
            className="button bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transform transition-all duration-300 hover:scale-105 shadow-lg flex items-center group"
            onClick={() => setActive("projects")}
          >
            Explore Projects
            <ArrowRightCircle className="ml-2 transition-transform group-hover:translate-x-1 " />
          </button>
        </div>
      </div>
    </div>
  );
}
