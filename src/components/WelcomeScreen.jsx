import React, { useState, useEffect, useRef } from 'react';
import './WelcomeScreen.css';

// Importar el archivo de audio
import audioFile from '../assets/audio/welcome.mp3';

export const WelcomeScreen = ({ startGallery }) => {
  const [audioPlayed, setAudioPlayed] = useState(false); // Estado para controlar si se ha reproducido el audio
  const audioRef = useRef(null); // Ref para acceder al audio

  useEffect(() => {
    // Reproducir el audio automáticamente cuando el componente se carga
    if (audioRef.current && !audioPlayed) {
      audioRef.current.play(); // Reproducir audio solo si no se ha reproducido
    }
  }, [audioPlayed]);

  const handleStart = () => {
    setAudioPlayed(true); // Marca que el audio fue reproducido
    startGallery(); // Llama a la función para iniciar la galería
  };

  return (
    <div className="welcome-screen">
      {/* Reproducir el audio, solo si no ha sido reproducido */}
      <audio ref={audioRef} controls autoPlay>
        <source src={audioFile} type="audio/mp3" />
        Tu navegador no soporta el audio.
      </audio>

      <div className="welcome-card">
        <h1>¡Wolas, Prima!</h1>
        <p>Este es un pequeño regalo para ti.</p>
        <h1>❣️</h1>
        <button className="start-btn" onClick={handleStart}>
          Empezar
        </button>
      </div>
    </div>
  );
};
