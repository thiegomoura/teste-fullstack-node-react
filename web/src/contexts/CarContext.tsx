import React, { useContext, useState } from 'react'
import { createContext } from 'react';

interface Car {
    id: string;
    carName: string;
    brand: string;
    year: number;
    description: string;
    isSold: boolean;
    createdAt: string;
}

interface CarContextProps {
    cars: Car[];
    setCars([]): void;
    carsFiltered: Car[];
    setCarsFiltered([]): void;
    carDetail: Car | null;
    setCarDetail(arg0: Car): void;
    isAddingCar: boolean;
    setIsAddingCar(arg0: boolean): void;
}


const CarContext = createContext<CarContextProps>({} as CarContextProps);

const CarProvider: React.FC = ({ children }) => {
    const [cars, setCars] = useState<Car[]>([]);
    const [carsFiltered, setCarsFiltered] = useState<Car[]>([]);
    const [carDetail, setCarDetail] = useState<Car | null>(null);
    const [isAddingCar, setIsAddingCar] = useState(false);

    return (
        <CarContext.Provider value={{
            cars,
            setCars,
            carsFiltered,
            setCarsFiltered,
            carDetail,
            setCarDetail,
            isAddingCar,
            setIsAddingCar
        }}>
            {children}
        </CarContext.Provider>
    )
}

export function useCar() {
    const context = useContext(CarContext);
    const { cars, setCars, carsFiltered, setCarsFiltered, carDetail, setCarDetail, isAddingCar, setIsAddingCar } = context;
    return { cars, setCars, carsFiltered, setCarsFiltered, carDetail, setCarDetail, isAddingCar, setIsAddingCar }
}

export default CarProvider;
