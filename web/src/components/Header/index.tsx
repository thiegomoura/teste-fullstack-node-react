import React, { FormEvent, useEffect, useState } from 'react'
import { useCar } from '../../contexts/CarContext';

import { FaCar } from 'react-icons/fa';

import {
  Main,
  Form
} from './styles';

const Header: React.FC = () => {
  const { cars, setCars, carsFiltered, setCarsFiltered, carDetail, setCarDetail } = useCar();
  const [searchedCar, setSearchedCar] = useState<string>();

  useEffect(() => {
    if (searchedCar === '') {
      setCarsFiltered(cars)
    }
  }, [searchedCar])

  function handleSearchCar(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (searchedCar) {
      const result = cars.filter(car => car.carName.toLowerCase().indexOf(searchedCar.toLowerCase()) !== -1)
      setCarsFiltered(result)
    }
  }
  return (
    <Main className='container'>
      <FaCar size={48} />
      <h1>Carangão</h1>
      <Form onSubmit={handleSearchCar}>
        <input type="text" placeholder="Digite um veículo" value={searchedCar} onChange={e => setSearchedCar(e.target.value)} required />
        <button>Pesquisar</button>
      </Form>
    </Main>
  )
}

export default Header
