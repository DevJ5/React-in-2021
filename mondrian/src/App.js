import './App.css';
import React from 'react';

import Toolbar from './Components/Navigation/Toolbar/Toolbar';
import PaintingBuilder from './Containers/PaintingBuilder/PaintingBuilder';

function App() {
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <PaintingBuilder></PaintingBuilder>
    </div>
  );
}

export default App;
