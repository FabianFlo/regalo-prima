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
import img8b from '../assets/images/img-08b.jpg';
import img9 from '../assets/images/img-09.jpg';
import img10 from '../assets/images/img-10.jpg';
import img10b from '../assets/images/img-10b.jpg';
import img11 from '../assets/images/img-11.jpg';
import img12 from '../assets/images/img-12.jpg';
import img13 from '../assets/images/img-13.jpg';
import img14 from '../assets/images/img-14.jpg';
import img15 from '../assets/images/img-15.jpg';
import img15b from '../assets/images/img-15b.jpg';
import img16 from '../assets/images/img-16.jpg';
import img17 from '../assets/images/img-17.jpg';
import img18 from '../assets/images/img-18.jpg';
import img19 from '../assets/images/img-19.jpg';
import img20 from '../assets/images/img-20.jpg';

const PhotoGallery = () => {
  const photos = [
        { src: img1, alt: 'Foto 1', message: 'La primera vez que fui a verte a tu casa.' },
        { src: img2, alt: 'Foto 2', message: 'A semanas de habernos conocido.' },
        { src: img3, alt: 'Foto 3', message: 'Supe que no me podría deshacer de ti. -.-', className: 'photo-03' },
        { src: img4, alt: 'Foto 4', message: 'Y tristemente, así fue.', className: 'photo-04' },
        { src: img5, alt: 'Foto 5', message: 'Tanto dentro del colegio.' },
        { src: img6, alt: 'Foto 6', message: 'Como yendo en distintos lugares.' },
        { src: img7, alt: 'Foto 7', message: 'Acompañándonos.' },
        { src: img8, alt: 'Foto 8', message: 'Aún cuando no se podía.' },
        { src: img8b, alt: 'Foto 8b', message: "Celebrando tus cumpleaños." },
        { src: img9, alt: 'Foto 9', message: 'Haciendo que cada risa cuente.' },
        { src: img10, alt: 'Foto 10', message: 'Estando en tus días más importantes.' },
        { src: img10b, alt: 'Foto 10b', message: 'Siendo parte de tu vida.' },
        { src: img11, alt: 'Foto 11', message: 'Acompañándonos cada vez que coincidíamos.' },
        { src: img13, alt: 'Foto 13', message: 'Aunque fuera solo el trayecto.' },
        { src: img12, alt: 'Foto 12', message: 'Me alegras las tardes.' },
        { src: img15, alt: 'Foto 15', message: 'Cada salida es una anécdota de lo idiotas que somos.' },
        { src: img14, alt: 'Foto 14', message: 'No recuerdo un día en que no esté bien a tu lado.' },
        { src: img15b, alt: 'Foto 15b', message: 'Te lo agradezco mucho.' },
        { src: img16, alt: 'Foto 16', message: 'Te quiero mucho, idiota.' },
        { src: img17, alt: 'Foto 17', message: 'A pesar de que no nos veamos más de una vez al año.' },
        { src: img18, alt: 'Foto 18', message: 'Pero te aseguro que estaré para ti, sea el día que sea. A pesar de no vernos, ten en cuenta que siempre estaré para ayudarte, prima.', className: 'photo-18' },
        { src: img19, alt: 'Foto 19', message: 'Y no te preocupes, sé que me quieres, aunque no sepas demostrarlo, según tú.' },
        { src: img20, alt: 'Foto 20', message: 'Te quiero mucho, Juli. Eres mi familia, casi 9 años de esta amistad :)' },
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
