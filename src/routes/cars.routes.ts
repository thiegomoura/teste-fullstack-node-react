import { request, response, Router } from 'express'
import Car from '../entities/Car';
import CarRepository from '../repositories/CarRepository';

const carsRouter = Router();
const carsRepository = new CarRepository();

carsRouter.get('/', (_, response) => {
  const cars = carsRepository.index();
  return response.json(cars);
});

carsRouter.get('/find/:id', (request, response) => {
  const carId = request.params.id;
  const car = carsRepository.findCarById(carId);
  if (car)
    return response.json(car);
  else
    return response.json({ "message": "Car not found!" });
});

carsRouter.post('/', (request, response) => {
  const {
    carName,
    year,
    description,
    isSold,
    createdAt,
  } = request.body;

  const car = carsRepository.create({ carName, year, description, isSold, createdAt });

  return response.json(car);
});

export default carsRouter;
