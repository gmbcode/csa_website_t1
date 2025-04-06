<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>CSA</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
    <style>
      body {
        margin: 0;
        padding: 0;
        background: black;
        color: white;
        font-family: 'Orbitron', sans-serif;
        overflow-x: hidden;
      }

      canvas {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        pointer-events: none;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
        text-align: center;
      }

      .about {
        max-width: 1000px;
        text-align: left;
        padding: 2rem;
      }

      h1, h2 {
        margin: 1rem 0;
      }
    </style>
  </head>
  <body>
    <!-- Canvas for animated background -->
    <canvas id="bg-canvas"></canvas>

    <div class="container">
      <div>
        <!-- Your original animated SVG logo -->
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Your animated SVG paths here -->
          <circle cx="100" cy="100" r="50" stroke="white" stroke-width="2" fill="white" fill-opacity="0.05" />
        </svg>
      </div>

      <h1 class="text-4xl font-bold tracking-wide">Welcome to CSA</h1>
      <h2 class="text-3xl font-bold py-10">About Us</h2>
      <div class="about">
        <p>
          We, <i>The Computer Science Association</i> are more than just an association; we're the energy behind the CSIS Department at BITS Pilani, Hyderabad Campus, the guardians of all things geeky and techy, and the creators of exciting coding adventures!
          <br/><br/>
          Ever wondered who's behind the scenes making all those mind-blowing tech events happen? That's us, the CSA! From organizing hackathons that redefine coding marathons to hosting talks that'll ignite fresh perspectives, we're here to keep the CS culture thriving on campus.
          <br/><br/>
          Our dedicated teams, which include the Core Team, the Tech Team, the Content Team, and the Design Team, each play a vital role in bringing our vision to life. The Core Team serves as the maintenance head of CSA, from wrangling logistics to stealing the spotlight with our event publicity, they're the glue that holds it all together. Meanwhile, the Tech Team pushes boundaries with their coding expertise, the Content Team fuels minds with informative articles and captivating captions, as the Design Team adds visual flair to every aspect of our events.
        </p>
      </div>

      <h2 class="text-lg font-bold text-center py-20">
        <i>"We are CSA, the champions of tech innovation and creators of a vibrant CS culture."</i>
      </h2>
    </div>

    <!-- Animated Polygon Background Script -->
    <script>
      const canvas = document.getElementById("bg-canvas");
      const ctx = canvas.getContext("2d");

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;

      window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });

      const polygons = Array.from({ length: 30 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 20 + Math.random() * 30,
        sides: 3 + Math.floor(Math.random() * 3),
        angle: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.3,
        rotation: (Math.random() - 0.5) * 0.01,
        opacity: 0.05 + Math.random() * 0.05,
      }));

      function drawPolygon(x, y, radius, sides, angle) {
        ctx.beginPath();
        for (let i = 0; i < sides; i++) {
          const theta = (i / sides) * 2 * Math.PI + angle;
          const px = x + radius * Math.cos(theta);
          const py = y + radius * Math.sin(theta);
          ctx.lineTo(px, py);
        }
        ctx.closePath();
      }

      function animate() {
        ctx.clearRect(0, 0, width, height);
        for (const poly of polygons) {
          ctx.save();
          ctx.translate(poly.x, poly.y);
          drawPolygon(0, 0, poly.size, poly.sides, poly.angle);
          ctx.strokeStyle = `rgba(255, 255, 255, ${poly.opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.restore();

          poly.y -= poly.speed;
          poly.angle += poly.rotation;

          if (poly.y + poly.size < 0) {
            poly.y = height + poly.size;
            poly.x = Math.random() * width;
          }
        }
        requestAnimationFrame(animate);
      }

      animate();
    </script>
  </body>
</html>
