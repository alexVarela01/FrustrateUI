import React, { useState } from 'react';
import './css/NotSoHiddenPassword.css'; // import the CSS file

const NotSoHiddenPassword = ({ id, label, className, maxlength, value, onChange }) => {
  const [emojiValue, setEmojiValue] = useState("");

  const emojiMap = {
    "a": "💀", "b": "🐻", "c": "🍒", "d": "🔥", "e": "😡", "f": "🦊", "g": "🦒", "h": "👽","i": "👀",
    "j": "🤖", "k": "🔑", "l": "🦁", "m": "🌊", "n": "🍇", "o": "🌎", "p": "🍕", "q": "🎯",
    "r": "🚀", "s": "🐍", "t": "🍅", "u": "🦄", "v": "🌴", "w": "🌈", "x": "❌", "y": "💡",
    "z": "🦓", "A": "👑", "B": "🚗", "C": "🐈", "D": "🐬", "E": "🌞", "F": "🧢", "G": "🧠",
    "H": "🌺", "I": "🌱", "J": "🤮", "K": "😛", "L": "🤠", "M": "🤬", "N": "🐃", "O": "👾",
    "P": "🤯", "Q": "🐀", "R": "🐈‍⬛", "S": "🦧", "T": "🪸", "U": "⛷️", "V": "🦷", "W": "😀",
    "X": "🍗", "Y": "🛩️", "Z": "🏴", "0": "🌦️","9": "🌬️","8": "🌆","7": "🚆","6": "🧧",
    "5": "✏️","4": "🩲","3": "🛹","2": "🛒","1": "🗿", "+": "🏰", "-": "👠", "*": "💼",
    "/": "✖️", "%": "💯", "&": "👥", "@": "📧", "#": "🎹", "!": "❓", "?": "❗", "(": "👶",
    ")": "👴", "[": "📚", "]": "🧮", "{": "🌳", "}": "🍂", ":": "🕰️", ";": "🎻", "<": "👈",
    ">": "👉", "=": "⚖️", "`": "🌀", "~": "🌰", "|": "🔒", " ": "🤩", "'": "🪷",
    "ª": "🐽", "º": "🦎", "Ç": "💩", "ç": "🙈",",": "🛴", ".": "🍌", "_": "🌌"
  };

  const handleChange = (e) => {
    const input = e.target.value;

    let emojiText = "";
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      emojiText += emojiMap[char] || char;
    }

    let realVal = removeEmojis(input);

    if((value+realVal).length > maxlength){
      return;
    }

    setEmojiValue(emojiText);
    onChange(value+realVal)
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 8) {
      event.preventDefault();
    }
    //disable delete key
    if (event.keyCode === 46) {
      event.preventDefault();
    }
    // Disable left and right arrow keys
    if (event.keyCode === 37 || event.keyCode === 39) {
      event.preventDefault();
    }
    // Disable mouse cursor movement
    if (event.type === "mousemove") {
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

  const handleClear = (e) => {
    setEmojiValue("");
    onChange("")
  };

  const handleClick = (event) => {
    const {value} = event.target;
    const position = value.length;
    event.target.setSelectionRange(position, position);
 }

  function removeEmojis (string) {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  
    return string.replace(regex, '');
  }
  
  return (
    <div className={className}>
      <label className="imojipasswd-label">{label}</label>
      <div className="imojipasswd-input">
        <input id={id} onKeyDown={handleKeyDown} className="imojipasswd-input__display" type="text" onClick={handleClick} value={emojiValue} data-realVal={value} onChange={handleChange} />
        <button className="imojipasswd-button" onClick={handleClear}>X</button>
      </div>
    </div>
  );
};

export default NotSoHiddenPassword;
