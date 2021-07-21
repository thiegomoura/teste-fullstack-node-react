import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
