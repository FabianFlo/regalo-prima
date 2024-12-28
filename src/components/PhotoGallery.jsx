import React, { useState } from "react";
import "./PhotoGallery.css";

const photos = [
  { src: "/photos/photo1.jpg", message: "Nuestro primer viaje juntas" },
  { src: "/photos/photo2.jpg", message: "Un día especial" },
  { src: "/photos/photo3.jpg", message: "Recuerdo inolvidable" },
];

export const PhotoGallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="photo-gallery">
      <div className="photo-container">
        <img
          src={photos[currentPhoto].src}
          alt={`Foto ${currentPhoto + 1}`}
          className="photo"
        />
        <p className="photo-message">{photos[currentPhoto].message}</p>
      </div>
      <div className="controls">
        <button onClick={prevPhoto}>⟵ Anterior</button>
        <button onClick={nextPhoto}>Siguiente ⟶</button>
      </div>
    </div>
  );
};
