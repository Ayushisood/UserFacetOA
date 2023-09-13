// import './App.css';
import { Tetris } from './pages/Tetris';
import React, { useState } from "react";
import wordContext from './utils/context';

const App = () => {
  const [currentWord, setCurrentWord] = useState("");

  return (
    <wordContext.Provider value={{ currentWord, setCurrentWord }}>
      <div style={{ height: "100vh" }}>
        <Tetris />
      </div>
    </wordContext.Provider>
  );
};

export default App;
