'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import Background from '../components/Background';
//import Background from '../components/Background'; // Adjust the path if needed

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
        },
      });

      const pathLength2 = (path2 as SVGPathElement).getTotalLength();
      gsap.set(path2, { strokeDasharray: pathLength2, strokeDashoffset: pathLength2 });
      gsap.to(path2, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(path2, { fillOpacity: 1, duration: 1 });
        },
      });

      const pathLength3 = (path3 as SVGPathElement).getTotalLength();
      gsap.set(path3, { strokeDasharray: pathLength3, strokeDashoffset: pathLength3 });
      gsap.to(path3, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(path3, { fillOpacity: 1, duration: 1 });
        },
      });
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 text-center text-white overflow-hidden">
      <div className="z-10 w-full flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-10 flex justify-center items-center">
          <svg 
            width="400" 
            height="400" 
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              id="logoA"
              d="M0 0 C10.23062943 2.69974943 17.53248295 7.84961538 23 17 C27.227566 25.48214521 28.16887108 33.60992501 28.09765625 43 C28.0962413 43.7211499 28.09482635 44.4422998 28.09336853 45.18530273 C28.08783381 47.45691324 28.07529423 49.72842 28.0625 52 C28.05747654 53.55338398 28.05291512 55.10676952 28.04882812 56.66015625 C28.03788589 60.44014328 28.0206676 64.22005414 28 68 C26.02 68 24.04 68 22 68 C21.34 65.69 20.68 63.38 20 61 C19.53851563 61.37511719 19.07703125 61.75023437 18.6015625 62.13671875 C7.11764258 71.14682984 -3.52859678 74.39287256 -18 73 C-26.25989367 70.96663332 -33.4155523 66.40569001 -39 60 C-39 59.01 -39 58.02 -39 57 C-37.35 56.34 -35.7 55.68 -34 55 C-33.14728516 55.81404297 -33.14728516 55.81404297 -32.27734375 56.64453125 C-25.23721131 63.16752541 -19.50777158 66.48958654 -9.8125 67.25 C-0.58726867 66.6450668 6.41400075 63.52303559 13 57 C19.50135307 49.12041576 21.96839105 41.16810598 21 31 C19.6772202 23.84496379 16.19050297 18.06050826 11 13 C8.11570715 11.10172382 5.222268 9.39571698 2.16015625 7.80078125 C0 6 0 6 -0.31640625 2.79296875 C-0.21199219 1.87128906 -0.10757813 0.94960937 0 0 Z "
              transform="translate(144,64)"
              stroke="white" 
              strokeLinecap="round"
              fill="white"
              fillOpacity="0"
            />
            <path 
              id="logoS"
              d="M0 0 C0.825 0.61875 1.65 1.2375 2.5 1.875 C3.49 2.535 4.48 3.195 5.5 3.875 C4.13016497 7.03615776 3.5109362 7.8677092 0.5 9.875 C-0.09167969 9.39289063 -0.68335938 8.91078125 -1.29296875 8.4140625 C-2.08316406 7.78242187 -2.87335938 7.15078125 -3.6875 6.5 C-4.85345703 5.56027344 -4.85345703 5.56027344 -6.04296875 4.6015625 C-12.54520498 0.03242353 -19.84797783 -0.75806054 -27.5625 0.5 C-32.59149562 1.65573191 -36.37105184 3.84772186 -40.5 6.875 C-41.8303125 7.7721875 -41.8303125 7.7721875 -43.1875 8.6875 C-49.51817226 14.67597376 -52.4915877 22.085368 -52.8125 30.75 C-52.55455206 40.22242141 -48.96818057 47.03493226 -42.5 53.875 C-39.15991628 56.74091735 -35.53757125 59.09846865 -31.5 60.875 C-31.5 62.855 -31.5 64.835 -31.5 66.875 C-42.91488473 63.86273875 -49.82830996 57.81106973 -55.7578125 47.73828125 C-60.25071658 38.48541235 -60.07732225 26.4732873 -56.875 16.8125 C-52.77549505 7.35210396 -46.26220744 0.33541119 -36.8125 -3.9375 C-24.4573355 -8.36670991 -11.03488495 -7.19431225 0 0 Z "
              transform="translate(87.5,69.125)"
              stroke="white" 
              strokeLinecap="round"
              fill="white"
              fillOpacity="0"
            />
            <path 
              id="logoC"
              d="M0 0 C0 1.65 0 3.3 0 5 C-1.2684375 5.32871094 -1.2684375 5.32871094 -2.5625 5.6640625 C-13.56697223 8.74031269 -21.05827597 13.02701777 -27 23 C-29.69680711 28.35453005 -30.43959002 32.75461019 -30.8125 38.6875 C-31.63609233 48.1360686 -34.26393738 55.61012643 -40.5 62.9375 C-41.7375 63.9584375 -41.7375 63.9584375 -43 65 C-44.299375 66.2684375 -44.299375 66.2684375 -45.625 67.5625 C-52.66565445 73.2672354 -61.19520514 74.68757617 -70 74 C-70 72.35 -70 70.7 -70 69 C-69.16597656 68.85304688 -68.33195312 68.70609375 -67.47265625 68.5546875 C-56.55695905 66.37905026 -48.36572285 62.36364737 -42 53 C-38.4493189 47.4571876 -37.63272503 41.97974097 -37 35.5625 C-35.79061974 23.56092729 -32.42619762 15.0895433 -23 7 C-15.32198842 2.25061517 -8.99876039 -0.17305308 0 0 Z "
              stroke="white"  
              transform="translate(134,63)" 
              strokeLinecap="round"
              fill="white"
              fillOpacity="0"
            />
          </svg>
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl font-bold tracking-wide text-center">Welcome to CSA</h1>
        <h2 className="text-3xl font-bold text-center py-10">About Us</h2>
        <p className="text-xl text-center max-w-4xl mx-auto px-6">
          We, <i>The Computer Science Association</i>, are more than just an association; we're the energy behind the CSIS Department at BITS Pilani, Hyderabad Campus, the guardians of all things geeky and techy, and the creators of exciting coding adventures!
          <br /><br />
          Ever wondered who's behind the scenes making all those mind-blowing tech events happen? That's us, the CSA! From organizing hackathons that redefine coding marathons to hosting talks that'll ignite fresh perspectives, we're here to keep the CS culture thriving on campus.
          <br /><br />
          Our dedicated teams — the Core Team, Tech Team, Content Team, and Design Team — each play a vital role in bringing our vision to life. The Core Team manages logistics and publicity, the Tech Team pushes coding boundaries, the Content Team crafts informative content, and the Design Team brings visual flair to everything we do.
        </p>

        <h2 className="text-lg font-bold text-center text-white py-20">
          <i>"We are CSA, the champions of tech innovation and creators of a vibrant CS culture."</i>
        </h2>
      </div>
    </div>
  );
}
