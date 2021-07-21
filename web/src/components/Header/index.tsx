import React from 'react'

import { FaCar } from 'react-icons/fa';

import {
  Main,
  Form
} from './styles';

const Header: React.FC = () => {
  return (
    <Main>
      <FaCar size={48} />
      <h1>Carangão</h1>
      <Form>
        <input type="text" placeholder="Digite um veículo" />
        <button>Pesquisar</button>
      </Form>
    </Main>
  )
}

export default Header
