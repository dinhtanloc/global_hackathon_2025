import React from 'react';
import './App.css';
import TextInput from './components/TextInput';
import GifDisplay from './components/GifDisplay';
import Header from './components/Header/Header';
function App() {
  return (
    <div>


    <Header/>
    <div className="app-container">
      <div className="content">
        <TextInput />
        <GifDisplay />
      </div>
    </div>
    </div>
  );
}

export default App;
