"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Photo2 from "../assets/Assest2.jpeg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useActiveSectionContext } from "./activeContext";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { setActive } = useActiveSectionContext();
  // Create refs for animated elements
  const imageRef = useRef(null);
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const taglineRef = useRef(null);

  // Initial animation on component mount
  useEffect(() => {
    // Initial entrance animation
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "elastic",
      }
    );

    tl.fromTo(
      [fNameRef.current, lNameRef.current, taglineRef.current],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scale: 1,
        ease: "power2.out",
      },
      "-=0.4"
    );

    tl.fromTo(
      lNameRef.current,
      { rotate: 0 },
      {
        rotate: 2,
        duration: 0.5,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      imageRef.current,
      { rotate: 0 },
      {
        rotate: -2,
        duration: 0.5,
        ease: "power2.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 h-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="flex flex-wrap flex-col-reverse 2xl:flex-row w-full justify-between items-center gap-8 md:py-12 flex-1">
        <div className="flex flex-col flex-wrap ">
          <h1
            ref={fNameRef}
            className="text-6xl md:text-8xl font-black text-gray-100 font-serif"
          >
            YASIRU
          </h1>
          <h1
            ref={lNameRef}
            className="text-5xl md:text-4xl -mt-5 font-light text-blue-500 font-serif"
          >
            Lokesha
          </h1>
          <div
            ref={taglineRef}
            className="mt-4 text-xl font-medium text-gray-300"
          >
            <span className="font-bold">Tech Explorer 🚀</span> <br />
            CS Undergrad @ Swinburne University

            <p className="max-w-100 text-balance my-4">
              I&apos;m a Computer Science student with expertise in
              full-stack and mobile app development, software development.
              Skilled in ReactJS, Vue, and C/C#, he has built projects ranging
              from interactive dashboards to Android applications with
              animations and graphics.{" "}
            </p>
            <button
              type="button"
              className="button max-w-50 flex align-middle items-center justify-center bg-transparent outline outline-offset-2 hover:bg-gray-600 text-white font-semibold text-[12pt] py-2 px-6 my-4 rounded-md transform transition-all duration-300 shadow-lg"
              onClick={() => {
                window.open("https://github.com/yasirulokesha/Portfolio/tree/main/new","_blank", "noopener,noreferrer")
              }}
            >
              Portfolio Code
              <ArrowUpRight />
            </button>
          </div>
        </div>
        <div ref={imageRef} className="flex-1 mt-10 md:mt-0">
          <div className="relative w-64 md:w-80 lg:w-96 mx-auto md:mx-0 md:ml-auto">
            {/* <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl animate-ping transition-all duration-1000"></div> */}
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl "></div>
            <Image
              src={Photo2}
              alt="Yasiru Lokesha"
              className="rounded-2xl shadow-2xl z-10 relative"
              priority
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center flex-row mt-4">
        <button
          type="button"
          className="button bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl transform transition-all duration-300 hover:scale-105 shadow-lg flex items-center group"
          onClick={() => setActive("about")}
        >
          Explore Me
          <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </div>
  );
}
