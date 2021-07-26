import React, { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Home from './pages/Home';
import CarProvider, { useCar } from './contexts/CarContext';

import GlobalStyle from './styles/global';


function App() {
  const { isAddingCar } = useCar();
  return (
    <CarProvider>
      <Header />
      <Home />
      <GlobalStyle />
      <Modal />
    </CarProvider>
  );
}

export default App;
