import './App.css';
import React from 'react';

import Toolbar from './Components/Navigation/Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <div>Painting</div>
      <div>Color panel</div>
    </div>
  );
}

export default App;
