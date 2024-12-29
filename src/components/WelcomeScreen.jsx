import React from 'react';
import './WelcomeScreen.css';

export const WelcomeScreen = ({ startGallery }) => {
  return (
    <div className="welcome-card">
      <h1>¡Wolas, Prima!</h1>
      <br />
      <p>Este es un pequeño regalo para ti.</p>
      <h1>❣️</h1>
      <button className="start-btn" onClick={startGallery}>
        Empezar
      </button>
    </div>
  );
};
