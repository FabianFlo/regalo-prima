import React from 'react';
import './WelcomeScreen.css';

export const WelcomeScreen = ({ startGallery }) => {
  return (
    <div className="welcome-card">
      <h1>¡Wolas, Prima! ❣️</h1>
      <p>Este es un pequeño regalo para ti. ¡Disfruta :p !</p>
      <button className="start-btn" onClick={startGallery}>
        Empezar
      </button>
    </div>
  );
};
