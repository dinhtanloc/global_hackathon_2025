import React, { useState } from 'react';

function TextInput() {
  const [inputText, setInputText] = useState('');

  return (
    <textarea
      className="input-box"
      placeholder="Type here..."
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    ></textarea>
  );
}

export default TextInput;