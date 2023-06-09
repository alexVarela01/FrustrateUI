import React, { useState } from 'react';

import PatienceNumberInput from './components/PatienceNumberInput.js'
import ScreamingTextInput from './components/ScreamingTextInput.js'
import CapitalizationRouletteInput from './components/CapitalizationRouletteInput.js'
import ChaChaSlider from './components/ChaChaSlider.js'
import NotSoHiddenPassword from './components/NotSoHiddenPassword.js'
import NoMistakesAlowedInput from './components/NoMistakesAlowedInput.js'
import NoMistakesAlowedTextArea from './components/NoMistakesAlowedTextArea.js'
import DrawkcabInput from './components/DrawkcabInput.js'
import CantTouchThisButton from './components/CantTouchThisButton.js'
import AnyButtonButton from './components/AnyButtonButton.js'
import WaitForItButton from './components/WaitForItButton.js'
import PleaseHoldMeeeeeButton from './components/PleaseHoldMeeeeeButton.js'

function App() {

  const [pacienceInputValue, setPacienceInputValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [screamingText, setScreamingText] = useState("");
  const [randomCapitalizedText, setRandomCapitalizedText] = useState("");
  const [notSoHiddenPasswordRealValue, setNotSoHiddenPasswordRealValue] = useState("");
  const [noMistakesAlowedValue, setNoMistakesAlowedValue] = useState("");
  const [noMistakesAlowedTextareaValue, setNoMistakesAlowedTextareaValue] = useState("");
  const [backwardsInputValue, setBackwardsInputValue] = useState("");
  
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

  const handleNotSoHiddenPassword = (newValue) => {
    setNotSoHiddenPasswordRealValue(newValue)
  };

  const handleNoMistakesAlowedInput = (newValue) => {
    setNoMistakesAlowedValue(newValue)
  };

  const handleNoMistakesAlowedTextArea = (newValue) => {
    setNoMistakesAlowedTextareaValue(newValue)
  };

  const handleBackwardsInput = (newValue) => {
    setBackwardsInputValue(newValue)
  };

  const handleHoverButtonClick = () => {
    console.log("CantTouchThis clicked!")
  };

  const handleAnyButtonButton = () => {
    console.log("AnyButtonButton clicked!")
  };

  const handleWaitForItButton = () => {
    console.log("WaitForItButton clicked!")
  };

  const handlePleaseHoldMeeeeeButton = () => {
    console.log("PleaseHoldMeeeeeButton clicked!")
  };

  return (
    <div style={{display:"flex", flexDirection: 'column', gap: 20, margin: 20}}>
      <PatienceNumberInput label="Patience number field"  onChange={handlePacienceInputValue} value={pacienceInputValue}/>
      <ScreamingTextInput maxlength={10} label="Screaming text input" onChange={handlesetScreamingTextChange} value={screamingText}/>
      <CapitalizationRouletteInput maxlength={10} label="Random capitalize input" onChange={handlerandomCapitalizedTextChange} value={randomCapitalizedText}/>
      <ChaChaSlider label="Cha Cha slider" min={0} max={100} step={1} value={sliderValue} onChange={handleSliderChange} />
      <NotSoHiddenPassword maxlength={10} label="Not so hidden password" onChange={handleNotSoHiddenPassword} value={notSoHiddenPasswordRealValue}/>
      <NoMistakesAlowedInput maxlength={10} label="No Mistakes alowed" onChange={handleNoMistakesAlowedInput} value={noMistakesAlowedValue}/>
      <NoMistakesAlowedTextArea maxlength={100} label="No Mistakes alowed textarea" onChange={handleNoMistakesAlowedTextArea} value={noMistakesAlowedTextareaValue}/>
      <DrawkcabInput maxlength={20} label="Drawkcab text input" onChange={handleBackwardsInput} value={backwardsInputValue}/>
      <CantTouchThisButton speed="2" label="Can't Click This" onClick={handleHoverButtonClick}/>
      <AnyButtonButton clicksNeeded={10} label="Any Button Button" onClick={handleAnyButtonButton}/>
      <WaitForItButton timeNeeded={10} label="Wait Button" onClick={handleWaitForItButton}/>
      <PleaseHoldMeeeeeButton time={5} label="Hold button" onClick={handlePleaseHoldMeeeeeButton}/>
    </div>
  );
}

export default App;
