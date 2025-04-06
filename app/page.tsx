'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

const getMapJSON = require('dotted-map').getMapJSON;

// Get map JSON for potential future use
const mapJsonString = getMapJSON({ height: 60, grid: 'diagonal' });
console.log(mapJsonString);

export default function LandingPage() {
  useEffect(() => {
    const path1 = document.querySelector("#logoA");
    const path2 = document.querySelector("#logoS");
    const path3 = document.querySelector("#logoC");

    if (path1 && path2 && path3) {
      const pathLength1 = (path1 as SVGPathElement).getTotalLength();
      gsap.set(path1, { strokeDasharray: pathLength1, strokeDashoffset: pathLength1 });
      gsap.to(path1, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(path1, { fillOpacity: 1, duration: 1 });
        }
      });

      const pathLength2 = (path2 as SVGPathElement).getTotalLength();
      gsap.set(path2, { strokeDasharray: pathLength2, strokeDashoffset: pathLength2 });
      gsap.to(path2, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(path2, { fillOpacity: 1, duration: 1 });
        }
      });

      const pathLength3 = (path3 as SVGPathElement).getTotalLength();
      gsap.set(path3, { strokeDasharray: pathLength3, strokeDashoffset: pathLength3 });
      gsap.to(path3, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(path3, { fillOpacity: 1, duration: 1 });
        }
      });
    }

    // Polygon background animation
    const container = document.getElementById("background-polygons");
    if (container) {
      const count = 20;
      for (let i = 0; i < count; i++) {
        const poly = document.createElement("div");
        poly.className = "floating-polygon";

        const size = Math.random() * 30 + 20;
        poly.style.width = `${size}px`;
        poly.style.height = `${size}px`;
        poly.style.left = `${Math.random() * 100}%`;
        poly.style.top = `${Math.random() * 100}%`;
        poly.style.animationDuration = `${10 + Math.random() * 10}s`;
        poly.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(poly);
      }
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 text-center bg-black text-white overflow-hidden">
      {/* Background Container */}
      <div id="background-polygons" className="absolute inset-0 z-0"></div>

      {/* Logo */}
      <div className="mb-10 z-10">
        <svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Replace "..." with actual SVG paths */}
          <path id="logoA" d="..." transform="translate(144,64)" stroke="white" strokeLinecap="round" fill="white" fillOpacity="0" />
          <path id="logoS" d="..." transform="translate(87.5,69.125)" stroke="white" strokeLinecap="round" fill="white" fillOpacity="0" />
          <path id="logoC" d="..." transform="translate(134,63)" stroke="white" strokeLinecap="round" fill="white" fillOpacity="0" />
        </svg>
      </div>

      {/* Hero Text */}
      <h1 className="text-4xl font-bold tracking-wide z-10">Welcome to CSA</h1>
      <h2 className="text-3xl font-bold text-left py-10 z-10">About Us</h2>
      <p className="text-xl text-left max-w-screen px-20 z-10">
        We, <i>The Computer Science Association</i>, are more than just an association; we're the energy behind the CSIS Department at BITS Pilani, Hyderabad Campus, the guardians of all things geeky and techy, and the creators of exciting coding adventures!
        <br /><br />
        Ever wondered who's behind the scenes making all those mind-blowing tech events happen? That's us, the CSA! From organizing hackathons that redefine coding marathons to hosting talks that'll ignite fresh perspectives, we're here to keep the CS culture thriving on campus.
        <br /><br />
        Our dedicated teams — the Core Team, Tech Team, Content Team, and Design Team — each play a vital role in bringing our vision to life. The Core Team manages logistics and publicity, the Tech Team pushes coding boundaries, the Content Team crafts informative content, and the Design Team brings visual flair to everything we do.
      </p>

      <h2 className="text-lg font-bold text-center text-white py-20 z-10">
        <i>"We are CSA, the champions of tech innovation and creators of a vibrant CS culture."</i>
      </h2>

      {/* Polygon Animation Styles */}
      <style jsx global>{`
        .floating-polygon {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.05);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          animation: floatRotate ease-in-out infinite;
          opacity: 0.2;
          z-index: 0;
        }

        @keyframes floatRotate {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
