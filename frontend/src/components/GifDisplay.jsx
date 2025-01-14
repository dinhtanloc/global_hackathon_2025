import React from 'react';

function GifDisplay() {
  return (
    <div className="output-box">
      <img
        src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
        alt="Example GIF"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default GifDisplay;