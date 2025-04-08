'use client';
import React, { useEffect } from 'react';

export default function Background(): JSX.Element {
  useEffect(() => {
    const container = document.getElementById("background-animation");
    if (!container) return;

    const layerCount = 3; // number of parallax layers
    const shapesPerLayer = 30;
    const shapes: HTMLElement[][] = [];

    const shapesList = [
      "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // diamond
      "polygon(50% 0%, 100% 100%, 0% 100%)",         // triangle
      "circle(50% at 50% 50%)"                       // circle
    ];

    const layerContainers: HTMLDivElement[] = [];

    for (let l = 0; l < layerCount; l++) {
      const layer = document.createElement("div");
      layer.className = "parallax-layer";
      layer.style.position = "absolute";
      layer.style.top = "0";
      layer.style.left = "0";
      layer.style.width = "100%";
      layer.style.height = "100%";
      layer.style.overflow = "hidden";
      layer.style.zIndex = `${l}`;
      layer.style.pointerEvents = "none";
      container.appendChild(layer);
      layerContainers.push(layer);
      shapes.push([]);
    }

    for (let l = 0; l < layerCount; l++) {
      for (let i = 0; i < shapesPerLayer; i++) {
        const shape = document.createElement("div");
        shape.className = "floating-shape";

        const size = Math.random() * 10 + 10; // smaller shapes
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;

        const left = Math.random() * 100;
        const top = Math.random() * 100;

        shape.style.left = left + "%";
        shape.style.top = top + "%";
        shape.style.position = "absolute";
        shape.style.transformOrigin = "50% 50%";
        shape.style.animation = "floatRotate ease-in-out infinite";
        shape.style.animationDuration = (10 + Math.random() * 10) + "s";
        shape.style.animationDelay = (Math.random() * 5) + "s";
        shape.style.zIndex = "0";
        shape.style.clipPath = shapesList[Math.floor(Math.random() * shapesList.length)];

        const shade = Math.floor(Math.random() * 40) + 180;
        shape.style.backgroundColor = `rgba(${shade}, ${shade}, ${shade}, 0.15)`;

        layerContainers[l].appendChild(shape);
        shapes[l].push(shape);
      }
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

    // Parallax movement
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      layerContainers.forEach((layer, i) => {
        const depth = (i + 1) / layerCount; // 0.33, 0.66, 1
        const maxOffset = 20; // max px movement
        const offsetX = -x * maxOffset * depth;
        const offsetY = -y * maxOffset * depth;

        layer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      layerContainers.forEach(layer => container.removeChild(layer));
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      id="background-animation"
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ height: '100%', minHeight: '100vh' }}
    ></div>
  );
}
