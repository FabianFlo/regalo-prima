// PhotoGallery.jsx
import React, { useState } from 'react';
import './PhotoGallery.css';

// Importar las imágenes con la ruta correcta
import img1 from '../assets/images/img-01.jpg';
import img2 from '../assets/images/img-02.jpg';
import img3 from '../assets/images/img-03.jpg';
import img4 from '../assets/images/img-04.jpg';
import img5 from '../assets/images/img-05.jpg';
import img6 from '../assets/images/img-06.jpg';
import img7 from '../assets/images/img-07.jpg';
import img8 from '../assets/images/img-08.jpg';
import img9 from '../assets/images/img-09.jpg';
import img10 from '../assets/images/img-10.jpg';
import img11 from '../assets/images/img-11.jpg';
import img12 from '../assets/images/img-12.jpg';
import img13 from '../assets/images/img-13.jpg';
import img14 from '../assets/images/img-14.jpg';
import img15 from '../assets/images/img-15.jpg';
import img16 from '../assets/images/img-16.jpg';
import img17 from '../assets/images/img-17.jpg';
import img18 from '../assets/images/img-18.jpg';
import img19 from '../assets/images/img-19.jpg';
import img20 from '../assets/images/img-20.jpg';

const PhotoGallery = () => {
  const photos = [
    { src: img1, alt: 'Foto 1', message: 'Recuerdo 1' },
    { src: img2, alt: 'Foto 2', message: 'Recuerdo 2' },
    { src: img3, alt: 'Foto 3', message: 'Recuerdo 3', className: 'photo-03' }, // Clases específicas
    { src: img4, alt: 'Foto 4', message: 'Recuerdo 4', className: 'photo-04' }, // Clases específicas
    { src: img5, alt: 'Foto 5', message: 'Recuerdo 5' },
    { src: img6, alt: 'Foto 6', message: 'Recuerdo 6' },
    { src: img7, alt: 'Foto 7', message: 'Recuerdo 7' },
    { src: img8, alt: 'Foto 8', message: 'Recuerdo 8' },
    { src: img9, alt: 'Foto 9', message: 'Recuerdo 9' },
    { src: img10, alt: 'Foto 10', message: 'Recuerdo 10' },
    { src: img11, alt: 'Foto 11', message: 'Recuerdo 11' },
    { src: img12, alt: 'Foto 12', message: 'Recuerdo 12' },
    { src: img13, alt: 'Foto 13', message: 'Recuerdo 13' },
    { src: img14, alt: 'Foto 14', message: 'Recuerdo 14' },
    { src: img15, alt: 'Foto 15', message: 'Recuerdo 15' },
    { src: img16, alt: 'Foto 16', message: 'Recuerdo 16' },
    { src: img17, alt: 'Foto 17', message: 'Recuerdo 17' },
    { src: img18, alt: 'Foto 18', message: 'Recuerdo 18' },
    { src: img19, alt: 'Foto 19', message: 'Recuerdo 19' },
    { src: img20, alt: 'Foto 20', message: 'Recuerdo 20' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevPhoto = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(photos.length - 1);
    }
  };

  return (
    <div className="photo-gallery">
      <div className="photo-container">
        <img 
          src={photos[currentIndex].src} 
          alt={photos[currentIndex].alt} 
          className={`photo ${photos[currentIndex].className ? photos[currentIndex].className : ''}`} 
        />
        <p className="photo-message">{photos[currentIndex].message}</p>
      </div>
      <div className="controls">
        <button onClick={prevPhoto}>Anterior</button>
        <button onClick={nextPhoto}>Siguiente</button>
      </div>
    </div>
  );
};

export default PhotoGallery;
