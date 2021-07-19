import { request, response, Router } from 'express'
import { uuid } from 'uuidv4';
import { parseISO, startOfYear, } from 'date-fns';

const carsRouter = Router();


interface Car {
  id: string;
  carName: string;
  year: Date;
  description: string;
  isSold: boolean;
  createdAt: Date;
}

const cars: Car[] = [];

carsRouter.get('/', (request, response) => {
  return response.json(cars);
});

carsRouter.get('/find/:id', (request, response) => {
  const carId = request.params.id;
  const car = cars.filter(item => item.id === carId)
  return response.json(car);
});

carsRouter.post('/', (request, response) => {
  const {
    carName,
    year,
    description,
    isSold,
    createdAt,
  } = request.body;

  const car = {
    id: uuid(),
    carName,
    year,
    description,
    isSold,
    createdAt: parseISO(createdAt),
  }

  cars.push(car);

  return response.json(car);
});

export default carsRouter;
