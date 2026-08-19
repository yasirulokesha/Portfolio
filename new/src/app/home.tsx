"use client";

import { useEffect, useRef, useState } from "react";
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
  const [genImg1, setGenImg1] = useState<string | null>(null);
  const [genImg2, setGenImg2] = useState<string | null>(null);
  const [genImg3, setGenImg3] = useState<string | null>(null);

  const generateImage = async (
    prompt: string | null,
  ): Promise<string | null> => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt || "a beautifull sri lankan landscape, digital art",
        }),
      });

      if (!response.ok) {
        throw Error("Failed to generate image");
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      console.log("Generated image URL:", imageUrl);
      // setGenImg1(imageUrl);
      return imageUrl;
    } catch (error) {
      console.error("Error generating image:", error);
      return null;
    }
  };

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
      },
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
      "-=0.4",
    );

    tl.fromTo(
      lNameRef.current,
      { rotate: 0 },
      {
        rotate: 2,
        duration: 0.5,
        ease: "power2.out",
      },
    );

    tl.fromTo(
      imageRef.current,
      { rotate: -2, scale: 1.05 },
      {
        rotate: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      },
    );

    const loadGeneratedImage = async () => {
      const imageUrl1 = await generateImage(
        "a beautiful landscape, digital art",
      );
      const imageUrl2 = await generateImage("Sri lankan iconic landmarks");
      const imageUrl3 = await generateImage("a peaceful forest, digital art");
      setGenImg1(imageUrl1);
      setGenImg2(imageUrl2);
      setGenImg3(imageUrl3);
    };

    loadGeneratedImage();

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
            BA-CS @ Swinburne 🎓 <br />
            <p className="max-w-100 text-balance my-4">
              Computer Science graduate specializing in Software Development.
              Focused on creating responsive, user-friendly, and engaging web
              experiences.{" "}
            </p>
            <button
              type="button"
              className="button max-w-50 flex align-middle items-center justify-center bg-transparent outline outline-offset-2 hover:bg-gray-600 text-white font-semibold text-[12pt] py-2 px-6 my-4 rounded-md transform transition-all duration-300 shadow-lg"
              onClick={() => {
                window.open(
                  "https://github.com/yasirulokesha/Portfolio/tree/main/new",
                  "_blank",
                  "noopener,noreferrer",
                );
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
            {genImg1 ? (
              <Image
                src={
                  genImg1 ||
                  "https://blocks.astratic.com/img/general-img-landscape.png"
                }
                alt="Generated Image"
                width={128}
                height={128}
                className="rounded-full shadow-2xl z-10 top-10"
              />
            ):(
              <Image
                src={
                  "https://blocks.astratic.com/img/general-img-landscape.png"
                }
                alt="Generating Image"
                width={128}
                height={128}
                className="rounded-full shadow-2xl z-10 overflow-hidden h-30 w-30  top-10 animate-pulse transition-all duration-3000"
              />
            )}

            {genImg2 ? (
              <Image
                src={
                  genImg2 ||
                  "https://blocks.astratic.com/img/general-img-landscape.png"
                }
                alt="Generated Image"
                width={256}
                height={256}
                className="rounded-full shadow-2xl z-10  top-10 animate-fadeIn"
              />
            ):(
              <Image
                src={
                  "https://blocks.astratic.com/img/general-img-landscape.png"
                }
                alt="Generated Image"
                width={256}
                height={256}
                className="rounded-full shadow-2xl z-10 overflow-hidden h-55 w-55 animate-pulse top-10 animate-fadeIn"
              />
            )}
            {(genImg1 && genImg2 && genImg3) ? (
              <Image
                src={Photo2}
                alt="Yasiru Lokesha"
                className="rounded-full overflow-hidden h-55 w-55 absolute object-cover shadow-2xl -z-1 top-10 right-0 animate-fadeIn"
                priority
              />
            ):(
              <Image
                src={
                  "https://blocks.astratic.com/img/general-img-landscape.png"
                }
                alt="Generating Image"
                width={256}
                height={256}
                className="rounded-full overflow-hidden h-55 w-55 absolute object-cover shadow-2xl -z-1 top-10 right-0 animate-fadeIn"
              />
            )}

            {genImg3 ? (
              <Image
                src={
                  genImg3 ||
                  "https://blocks.astratic.com/img/general-img-landscape.png"
                }
                alt="Generated Image"
                width={128}
                height={128}
                className="rounded-full shadow-2xl overflow-hidden h-30 w-30 object-cover translate-x-full "
              />
            ):(
              <Image
                src={
                  "https://blocks.astratic.com/img/general-img-landscape.png"
                }
                alt="Generating Image"
                width={128}
                height={128}
                className="rounded-full shadow-2xl overflow-hidden h-30 w-30 translate-x-full animate-pulse transition-all duration-3000"
              />
            )}
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
