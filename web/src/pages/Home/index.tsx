import React, { useEffect, useState } from 'react'
import { useCar } from '../../contexts/CarContext';
import { IconContext } from "react-icons";
import { FiPlusCircle } from 'react-icons/fi';
import { BsTagFill } from "react-icons/bs";
import { HiPencil } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai'

import api from '../../services/api';

import {
  Container,
  Header,
  Cars,
  Info
} from './styles';

interface Car {
  id: string;
  carName: string;
  brand: string;
  year: number;
  description: string;
  isSold: boolean;
  createdAt: string;
}

const Home: React.FC = () => {
  const { cars, setCars, carsFiltered, setCarsFiltered, carDetail, setCarDetail, isAddingCar, setIsAddingCar } = useCar();
  useEffect(() => {
    const getCars = async () => {
      const response = await api.get<Car[]>('/cars');
      const car = response.data;
      setCars(car);
      setCarsFiltered(car);
    }
    getCars();
  }, [isAddingCar])

  function handleAddCarDetail(id: string) {
    const carSelect = cars.filter(car => car.id === id);
    setCarDetail(carSelect[0]);
  }

  return (
    <div className='container'>
      <Header>
        <span>Cadastro de veículos</span>
        <a href="#" onClick={() => setIsAddingCar(true)}>
          <FiPlusCircle size={36} />
        </a>
      </Header>
      <hr />
      <Container>
        <Cars>
          <span>Lista de veículos</span>
          {carsFiltered.map((car) => {
            return (
              <a onClick={() => { handleAddCarDetail(car.id) }} key={car.id}>
                <div>
                  <strong>{car.carName}</strong>
                  <span>{car.year}</span>
                </div>
                <BsTagFill size={24} />
              </a>
            )
          })}
        </Cars>
        <Info>
          <span>Detalhes</span>
          {carDetail ? (
            <>
              <div>
                <strong>{carDetail.carName}</strong>
                <div>
                  <div>
                    <strong>Marca</strong>
                    <span>{carDetail.brand}</span>
                  </div>
                  <div>
                    <strong>Ano</strong>
                    <span>{carDetail.year}</span>
                  </div>
                </div>
                <p>{carDetail.description}</p>
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
            </>
          ) : (
            <div className="select-car">
              <strong>Selecione um carro para visualizar</strong>
              <AiOutlineSearch size={48} />
            </div>
          )}
        </Info>
      </Container >
    </div >
  )
}

export default Home
