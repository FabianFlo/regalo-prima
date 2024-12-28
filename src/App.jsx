import React from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { PhotoGallery } from "./components/PhotoGallery";
import "./App.css";

function App() {
  return (
    <div className="app">
      <WelcomeScreen />
      <PhotoGallery />
    </div>
  );
}

export default App;
