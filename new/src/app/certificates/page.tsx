// import { useState } from 'react';
// import Image from 'next/image';

// const list = [
//   {
//     id: 1,
//     src: '/certificates/linkedIn-career_skills.jpeg',
//     alt: 'LinkedIn Career Skills Certificate',
//     title: 'LinkedIn Career Skills',
//   },
//   // Add more certificates here as needed, e.g.:
//   // {
//   //   id: 2,
//   //   src: '/certificates/other-cert.jpg',
//   //   alt: 'Other Certificate',
//   //   title: 'Other Cert',
//   // },
// ];

// export default function certificates() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <>
//       <section className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//               Certificates
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               My professional certifications and achievements showcasing continuous learning and skill development.
//             </p>
//           </div>

//           {/* Gallery Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
//             {list.map((cert) => (
//               <div
//                 key={cert.id}
//                 className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
//                 onClick={() => setSelectedImage(cert.src)}
//               >
//                 <div className="relative h-64 md:h-72 lg:h-80 w-full">
//                   <Image
//                     src={cert.src}
//                     alt={cert.alt}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                     priority={cert.id === 1}
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white font-semibold text-lg bg-black/30 backdrop-blur-sm px-3 py-2 rounded-xl group-hover:bg-black/50 transition-all">
//                     {cert.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Add more certificates button */}
//           <div className="text-center mt-16">
//             <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
//               View All Certificates
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
//             <Image
//               src={selectedImage}
//               alt="Full certificate"
//               fill
//               className="object-contain max-h-full"
//               sizes="100vw"
//             />
//             <button
//               className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 p-2"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setSelectedImage(null);
//               }}
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

export default function certificates() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">Hello, World!</h1>
    </div>
  );
}
