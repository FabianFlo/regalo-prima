import React, { useState, useRef } from 'react';
import './WelcomeScreen.css';

// Importar el archivo de audio
import audioFile from '../assets/audio/welcome.mp3';

export const WelcomeScreen = ({ startGallery }) => {
  const [audioPlayed, setAudioPlayed] = useState(false); // Estado para controlar si se ha reproducido el audio
  const audioRef = useRef(null); // Ref para acceder al audio

  const handlePlayAudio = () => {
    // Reproducir el audio
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("No se pudo reproducir el audio:", error);
      });
    }
    setAudioPlayed(true); // Marca que el audio fue reproducido
  };

  const handleStart = () => {
    startGallery(); // Llama a la función para iniciar la galería
  };

  return (
    <div className="welcome-screen">
      {/* Reproducir el audio, pero oculto al principio */}
      <audio ref={audioRef}>
        <source src={audioFile} type="audio/mp3" />
        Tu navegador no soporta el audio.
      </audio>

      <div className="welcome-card">
        <h1>¡Wolas, Prima!</h1>
        <p>Este es un pequeño regalo para ti.</p>
        <h1>❣️</h1>

        {!audioPlayed ? (
          // Botón "Escuchar" cuando el audio no ha sido reproducido
          <button className="start-btn" onClick={handlePlayAudio}>
            Escuchar
          </button>
        ) : (
          // Botón "Empezar" después de que el audio se haya reproducido
          <button className="start-btn" onClick={handleStart}>
            Empezar
          </button>
        )}
      </div>
    </div>
  );
};
