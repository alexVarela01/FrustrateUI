import React, { useState, useEffect } from 'react';
import './css/ChaChaSlider.css'; // import the CSS file

function ChaChaSlider({ label, min, max, step, value, className, onChange }) {
  const [sliderValue, setSliderValue] = useState(max - (value - min));
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isDragging) {
      setSliderValue(max - (value - min));
    }
  }, [value, min, max, isDragging]);

  const handleChange = (newValue) => {
    const invertedValue = max - (newValue - min);
    onChange(max - invertedValue);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event) => {
    setIsDragging(false);
    const newValue = Number(event.target.value);
    handleChange(newValue);
  };

  return (
    <div className={className}>
      <label className="slide-label">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={(event) => setSliderValue(max - Number(event.target.value) - min)}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        className="slide-input"
      />
    </div>
  );
}

export default ChaChaSlider;
