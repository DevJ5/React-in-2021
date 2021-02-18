import './App.css';
import React from 'react';

import PaintingBuilder from './Containers/PaintingBuilder/PaintingBuilder';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <PaintingBuilder></PaintingBuilder>
      </Layout>
    </div>
  );
}

export default App;
