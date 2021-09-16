import React from 'react'
import Color from './color.js'
import './App.css';

const electricViolet = {
  hex: "#9717e2",
  triadic: ["#9717E2", "#E23117", "#17C8E2"],
  tints: ["#A434E6", "#B151E9", "#BE6EED", "#CB8BF0", "#CB8BF0"],
  shades: ["#8414C6", "#7111A9", "#5E0E8D", "#4C0B71", "#390955", "#260638", "#13031C"]
}

export const ColorContext = React.createContext()

function App() {
  return (
    <div className="App">
      <ColorContext.Provider value={electricViolet}>
        <h1>Color</h1>
        <Color />
      </ColorContext.Provider>
    </div>
  );
}

export default App;
