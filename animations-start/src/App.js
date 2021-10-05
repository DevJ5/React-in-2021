import React, { useState } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal onToggle={toggleModalHandler} isModalOpen={isModalOpen} />
      <Backdrop isModalOpen={isModalOpen} />
      <button className="Button" onClick={toggleModalHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
