"use client";

// import { useState } from 'react';
import Image from "next/image";
import { useState } from "react";

const list = [
  {
    id: 1,
    src: "/certificates/github-foundations.png",
    alt: "GitHub Foundations Certificate",
    title: "GitHub Foundations",
  },
  {
    id: 2,
    src: "/certificates/linkedIn-career_skills.jpeg",
    alt: "LinkedIn Career Skills Certificate",
    title: "LinkedIn Career Skills",
  },
  {
    id: 3,
    src: "/certificates/Technical_support.jpeg",
    alt: "Technical Support Fundementals Certificate",
    title: "Technical Support - Google",
  },
  {
    id: 4,
    src: "/certificates/Foundation_Of_Coding_FullStack.jpg",
    alt: "Foundation Of Coding Full - Stack Certificate",
    title: "Foundation Of Coding Full Stack - Microsoft",
  }
];

export default function Certificates() {
  const [selectedItem, setSelectedItem] = useState<{src: string; alt: string; title: string} | null>(null);

  return (
    <>
      <section className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-100 ">
              My Certifications Showcase
            </h1>
            <p className="font-medium pb-8">
              My professional certifications and achievements showcasing
              continuous learning and skill development.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {list.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedItem(cert.id ? cert : null)}
              >
                <div className="relative h-64 md:h-72 lg:h-80 w-full">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-cover group-hover:scale-95 scale-90 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={cert.id === 1}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 hover:backdrop-saturate-200" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg bg-black/30 backdrop-blur-sm px-3 py-2 rounded-xl group-hover:bg-black/50 transition-all">
                    {cert.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedItem?.src || ""}
              alt="Full certificate"
              fill
              className="object-contain max-h-full"
              sizes="100vw"
            />
            <div className="flex absolute top-0 left-0 right-0 justify-between items-end ">
              <button
                className="w-fit h-10 left-0 font-semibold text-white text-lg hover:text-gray-300 px-4 bg-green-500/20 curser-pointer rounded-lg transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(null);
                }}
              >
                Visit link
              </button>
              <button
                className="w-15 h-15  right-0 font-semibold text-white text-2xl hover:text-gray-300 p-2 bg-red-500/20 curser-pointer rounded-2xl transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(null);
                }}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
