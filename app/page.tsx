'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import Background from '../components/Background'; // Adjust the path if necessary

export default function LandingPage() {
  useEffect(() => {
    const loadMapData = async () => {
      const { getMapJSON } = await import('dotted-map');
      const mapJsonString = getMapJSON({ height: 60, grid: 'diagonal' });
      console.log(mapJsonString);
    };

    loadMapData();

    const path1 = document.querySelector("#logoA");
    const path2 = document.querySelector("#logoS");
    const path3 = document.querySelector("#logoC");

    if (path1 && path2 && path3) {
      const animatePath = (path: SVGPathElement) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(path, { fillOpacity: 1, duration: 1 });
          }
        });
      };

      animatePath(path1 as SVGPathElement);
      animatePath(path2 as SVGPathElement);
      animatePath(path3 as SVGPathElement);
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 text-center bg-black text-white overflow-hidden">
      {/* Background animation */}
      <Background />

      {/* Logo */}
      <div className="mb-10 z-10">
        {/* Your SVG logo remains unchanged */}
        ...
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
    </div>
  );
}
