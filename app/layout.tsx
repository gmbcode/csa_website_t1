import React from 'react';
import '../styles/globals.css';
import { getGlobalData } from '../lib/cosmic';
import Generator from 'next/font/local';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sans = Generator({
  src: '../fonts/Generator-Variable.ttf',
  variable: '--font-sans',
});

export async function generateMetadata() {
  const siteData = await getGlobalData();
  return {
    title: siteData.metadata.site_title,
    description: siteData.metadata.site_tag,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteData = await getGlobalData();

  return (
    <html lang="en" className={`${sans.variable} font-sans`}>
      <body className="bg-white dark:bg-zinc-950 relative overflow-hidden">
        {/* Background Animation Container */}
        <div id="background-polygons" className="absolute inset-0 z-0 pointer-events-none"></div>

        <Header name={siteData} />
        {children}
        <Footer />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
  const container = document.getElementById("background-polygons");
  if (!container) return;
  const count = 50;
  const shapes = [
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    "polygon(50% 0%, 100% 100%, 0% 100%)",
    "circle(50% at 50% 50%)"
  ];

  for (let i = 0; i < count; i++) {
    const shape = document.createElement("div");
    shape.className = "floating-polygon";

    const size = Math.random() * 30 + 20;
    shape.style.width = size + "px";
    shape.style.height = size + "px";

    const cols = 10;
    const rows = 5;
    const col = i % cols;
    const row = Math.floor(i / cols);
    const left = (col + Math.random()) * (100 / cols);
    const top = (row + Math.random()) * (100 / rows);

    shape.style.left = left + "%";
    shape.style.top = top + "%";
    shape.style.position = "absolute";
    shape.style.animation = "floatRotate ease-in-out infinite";
    shape.style.animationDuration = (10 + Math.random() * 10) + "s";
    shape.style.animationDelay = (Math.random() * 5) + "s";
    shape.style.zIndex = "0";
    shape.style.clipPath = shapes[Math.floor(Math.random() * shapes.length)];

    const shade = Math.floor(Math.random() * 40) + 180;
    shape.style.backgroundColor = `rgba(${shade}, ${shade}, ${shade}, 0.05)`;

    container.appendChild(shape);
  }

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes floatRotate {
      0% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(180deg); }
      100% { transform: translateY(0) rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
})();`
          }}
        />
      </body>
    </html>
  );
}
