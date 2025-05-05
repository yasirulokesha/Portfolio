"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Use local worker from pdfjs-dist package
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <Document
        file="/Resume.pdf" // your PDF file in public folder
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={index} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
