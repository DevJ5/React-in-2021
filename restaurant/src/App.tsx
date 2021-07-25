import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Home from './components/Layout/Home';

interface IState {
  isCartModalOpen: boolean;
}

const App: React.FC = () => {
  const [isCartModalOpen, setIsCartModalOpen] =
    useState<IState['isCartModalOpen']>(false);

  const toggleCartModalHandler = (): void => {
    setIsCartModalOpen((prevState: boolean): boolean => {
      return !prevState;
    });
  };

  return (
    <div className="app">
      {isCartModalOpen && (
        <Cart
          onToggleCartModal={toggleCartModalHandler}
          isCartModalOpen={isCartModalOpen}></Cart>
      )}
      <Header onToggleCartModal={toggleCartModalHandler}></Header>
      <Home></Home>
    </div>
  );
};

export default App;
