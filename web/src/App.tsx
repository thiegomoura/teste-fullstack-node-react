import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Modal from './components/Modal';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Modal />
      <GlobalStyle />
    </>
  );
}

export default App;
