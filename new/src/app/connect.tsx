"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import img from "@/assets/Asset 6.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRightCircle,
  ArrowUpRight,
  Facebook,
  FacebookIcon,
  Github,
  Instagram,
  Linkedin,
  Phone,
} from "lucide-react";
import { useActiveSectionContext } from "./activeContext";
import Education from "./education";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
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
              Connect
            </h1>
            <h2
              ref={lNameRef}
              className="text-5xl md:text-4xl font-bold text-blue-500 tracking-tight -mt-1"
            >
              with me
            </h2>
            <div
              ref={taglineRef}
              className=" text-xl font-medium text-gray-300 max-w-md"
            >
              <p className="my-4">
                Feel free to get in touch with me for any collaborations,
                questions, or opportunities. I'm always open to connecting and
                exploring new ideas—let's build something great together!
              </p>
              <h1 className="font-bold">Location : Melbourne, Australia</h1>
              <h1 className="font-bold">Mail : yasirulokesha01@gmail.com</h1>

              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  className="hover:scale-115 duration-300 "
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/yasirulokesha/",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <Linkedin className="m-auto w-fit h-fit p-5 rounded-xl bg-gray-800/80 hover:bg-gray-800 text-6xl" />
                </button>
                <button
                  type="button"
                  className="hover:scale-115 duration-300"
                  onClick={() => {
                    window.open(
                      "https://github.com/yasirulokesha",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <Github className="m-auto w-fit h-fit p-5 rounded-xl bg-gray-800/80" />
                </button>
                <button
                  type="button"
                  className="hover:scale-115 duration-300"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/yasiru_lokesha",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <FacebookIcon className="m-auto w-fit h-fit p-5 rounded-xl bg-gray-800/80" />
                </button>

                <button
                  type="button"
                  className="hover:scale-115 duration-300"
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/yasiru.lokesha.9/",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <Instagram className="m-auto w-fit h-fit p-5 rounded-xl bg-gray-800/80" />
                </button>
              </div>
              {/* <button
                type="button"
                className="button my-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl transform transition-all duration-300 hover:scale-105 shadow-lg flex items-center group"
                onClick={() => setActive("connect")}
              >
                Leave a comment
                <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button> */}
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

      {/* CTA Button */}
      <div className="flex justify-center mt-10"></div>
    </div>
  );
}
