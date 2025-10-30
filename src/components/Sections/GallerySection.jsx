
import React from "react";
import "./GallerySection.css";

const images = [
  "https://th.bing.com/th/id/OIP._Jmckbp9tHnfU1aVihMzeQHaEK?w=272&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  "https://www.hindustantimes.com/ht-img/img/2024/01/22/1600x900/First_look_of_Ram_lalla_1705911497228_1705911499475.jpg",
  "https://th.bing.com/th/id/OIP.dZRSNhJz8n5jJPPyoWNDXAHaFj?w=243&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  "https://th.bing.com/th/id/OIP.KtycrG8gxisXDMSx7jacSAHaEK?w=283&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  "https://www.livemint.com/lm-img/img/2024/01/22/1600x900/Ayodhya_1705888504312_1705925080947.jpg",
  "https://images.news18.com/ibnlive/uploads/2024/01/ayodhya-ram-lalla-2024-01-503365f689a880e23c6ab59e7fc10848-scaled.jpg?impolicy=website&width=0&height=0"
];

export default function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title">Temple Gallery</h2>
      <div className="gallery-images">
        {images.map((img, i) => (
          <img key={i} src={img} alt="Ayodhya Mandir" className="gallery-img" />
        ))}
      </div>
    
  <section id="live" class="section container live">
  <h3 className="live-header">Live Darshan</h3>
  <div class="video-container" id="livedarshan">
    <iframe
      width="100%"
      height="410"
      src="https://www.youtube.com/embed/fKJFzC25MXo?autoplay=1"
      title="राम लला के दर्शन | अयोध्या लाइव"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</section>


    </section>
  );
}
