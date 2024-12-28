import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { PhotoGallery } from './components/PhotoGallery';
import './App.css';

function App() {
  const [showGallery, setShowGallery] = useState(false);

  // Cambia el estado para mostrar la galería de fotos
  const startGallery = () => {
    setShowGallery(true);
  };

  return (
    <div className="app">
      {!showGallery ? (
        <WelcomeScreen startGallery={startGallery} />
      ) : (
        <PhotoGallery />
      )}
    </div>
  );
}

export default App;
