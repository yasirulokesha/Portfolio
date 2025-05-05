import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarNavigation from "./SideBarNavigation";
import { ActiveSectionProvider } from "./activeContext";
import App from "./page";
// import App from "next/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome | 2025",
  description: "Scroll down!",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ActiveSectionProvider>
          <div className="flex flex-col lg:flex-row lg:h-screen m-auto lg:w-screen">
            <div className="p-4 flex lg:p-0">
              <SidebarNavigation />
            </div>
            {/* <App/> */}
            <main className="flex-1 p-4 lg:p-8">
              <App />
            </main>
          </div>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
