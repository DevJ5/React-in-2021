import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Home from './components/Layout/Home';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalHandler = () => {
    setIsModalOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="app">
      <Cart onToggleModal={toggleModalHandler} isModalOpen={isModalOpen}></Cart>
      <Header onToggleModal={toggleModalHandler}></Header>
      <Home></Home>
    </div>
  );
};

export default App;
