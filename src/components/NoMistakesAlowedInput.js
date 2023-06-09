import React from 'react';
import './css/NoMistakesAlowedInput.css'; 
import './css/General.css'; 

const NoMistakesAlowedInput = ({ id, label, className, maxlength, value, onChange }) => {

  const handleChange = (e) => {
    const input = e.target.value;

    if(input.length > maxlength){
      return;
    }

    onChange(input)
  };

  const handleKeyDown = (event) => {
    // Disable backspace key
    if (event.keyCode === 8) {
      event.preventDefault();
    }
    //disable delete key
    if (event.keyCode === 46) {
      event.preventDefault();
    }
    // Disable left and right arrow keys
    if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
      event.preventDefault();
    }
    // Disable pageup and page down
    if (event.keyCode === 33 || event.keyCode === 34) {
      event.preventDefault();
    }
    // Disable home and end
    if (event.keyCode === 36 || event.keyCode === 35) {
      event.preventDefault();
    }
    // Disable mouse cursor movement
    if (event.type === "mousemove") {
      event.preventDefault();
    }
    // Disable ctrl+v
    if (event.keyCode === 86 && event.ctrlKey) {
      event.preventDefault();
    }
    // Disable ctrl+z
    if (event.keyCode === 90 && event.ctrlKey) {
      event.preventDefault();
    }
    // Disable ctrl+a select
    if (event.keyCode === 65 && event.ctrlKey) {
      event.preventDefault();
    }
    // Disable replace
    if (event.target.selectionStart !== event.target.selectionEnd) {
      event.preventDefault();
    }
  };

  const handleClick = (event) => {
    const {value} = event.target;
    const position = value.length;
    event.target.setSelectionRange(position, position);
 }

  const handleClear = (e) => {
    onChange("")
  };

  const disableRightClick = (event) => {
    event.preventDefault();
  }

  return (
    <div className={className}>
      <label className="labels">{label}</label>
      <div className="input">
        <input id={id} onContextMenu={disableRightClick} onKeyDown={handleKeyDown} className="input_display" onClick={handleClick} type="text" value={value}  onChange={handleChange}/>
        <button className="no-mistake-button" onClick={handleClear}>X</button>
      </div>
    </div>
  );
};

export default NoMistakesAlowedInput;
