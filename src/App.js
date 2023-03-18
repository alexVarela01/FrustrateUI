import React, { useState, useEffect } from 'react';

import PatienceNumberInput from './components/PatienceNumberInput.tsx'
import ScreamingTextInput from './components/ScreamingTextInput.tsx'
import CapitalizationRouletteInput from './components/CapitalizationRouletteInput.tsx'
import ChaChaSlider from './components/ChaChaSlider.tsx'

function App() {

  const [pacienceInputValue, setPacienceInputValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [screamingText, setScreamingText] = useState("");
  const [randomCapitalizedText, setRandomCapitalizedText] = useState("");

  
  const handlePacienceInputValue = (newValue) => {
    setPacienceInputValue(newValue);
  };

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  const handlesetScreamingTextChange = (newValue) => {
    setScreamingText(newValue);
  };
  
  const handlerandomCapitalizedTextChange = (newValue) => {
    setRandomCapitalizedText(newValue);
  };

  return (
    <div style={{display:"flex", flexDirection: 'column', gap: 20, margin: 20}}>
      <PatienceNumberInput label="Patience number field"  onChange={handlePacienceInputValue} value={pacienceInputValue}/>
      <ScreamingTextInput label="Screaming text input" onChange={handlesetScreamingTextChange} value={screamingText}/>
      <CapitalizationRouletteInput label="Random capitalize input" onChange={handlerandomCapitalizedTextChange} value={randomCapitalizedText}/>
      <ChaChaSlider label="Cha Cha slider" min={0} max={100} step={1} value={sliderValue} onChange={handleSliderChange} />
    </div>
  );
}

export default App;
