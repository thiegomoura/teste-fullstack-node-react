import React from 'react'
import { IconContext } from "react-icons";
import { FiPlusCircle } from 'react-icons/fi';
import { BsTagFill } from "react-icons/bs";
import { HiPencil } from 'react-icons/hi';

import {
  Container,
  Header,
  Cars,
  Info
} from './styles';

const Home: React.FC = () => {
  return (
    <div>
      <Header>
        <span>Cadastro de veículos</span>
        <a href="#">
          <FiPlusCircle size={36} />
        </a>
      </Header>
      <hr />
      <Container>
        <Cars>
          <span>Lista de veículos</span>
          <a href="#">
            <div>
              <strong>FIAT</strong>
              <span>Pali G5 SP. 1.6 Flex</span>
              <span>2016</span>
            </div>
            <BsTagFill size={24} />
          </a>
          <a href="#">
            <div>
              <strong>FIAT</strong>
              <span>Pali G5 SP. 1.6 Flex</span>
              <span>2016</span>
            </div>
            <BsTagFill size={24} />
          </a>
          <a href="#">
            <div>
              <strong>FIAT</strong>
              <span>Pali G5 SP. 1.6 Flex</span>
              <span>2016</span>
            </div>
            <BsTagFill size={24} />
          </a>
        </Cars>
        <Info>
          <span>Detalhes</span>
          <div>
            <strong>Palio G5 SP.1.6 Flex</strong>
            <div>
              <div>
                <strong>Marca</strong>
                <span>FIAT</span>
              </div>
              <div>
                <strong>Ano</strong>
                <span>2016</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro fugiat nulla soluta repellendus possimus eligendi, laboriosam provident aliquam voluptates. Ea autem, mollitia dolore accusantium nostrum quis! Explicabo, magnam odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint non ad. Perspiciatis repudiandae laborum, magnam recusandae iure ipsa tenetur dolorem non sint excepturi dolor repellat in architecto placeat ratione.
            </p>
            <p>Laboriosam exercitationem neque ut libero numquam ratione maxime fugit atque, corporis autem id repellendus, rerum explicabo, deserunt ducimus velit! Nesciunt alias laboriosam earum consequuntur, voluptates sapiente neque incidunt aspernatur iure?
              Aspernatur porro enim delectus cum necessitatibus quia similique.
            </p>
          </div>
          <hr />
          <div className="footer">
            <button type="button">
              <HiPencil size={24} />
              <span>Editar</span>
            </button>
            <IconContext.Provider value={{ color: "green" }}>
              <div>
                <BsTagFill size={36} className="sold" />
              </div>
            </IconContext.Provider>
          </div>
        </Info>
      </Container >
    </div >
  )
}

export default Home
