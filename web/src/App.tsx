import React from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
      {/* <Modal />; */}
    </>
  );
}

export default App;
