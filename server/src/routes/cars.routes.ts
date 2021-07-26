import { Router } from 'express'
import { getCustomRepository } from 'typeorm';
import CarRepository from '../repositories/CarRepository';

const carsRouter = Router();

carsRouter.get('/', async (_, response) => {
  const carsRepository = getCustomRepository(CarRepository);
  const cars = await carsRepository.find();
  return response.json(cars);
});

carsRouter.get('/find/:id', async (request, response) => {
  const carId = request.params.id;
  const carsRepository = getCustomRepository(CarRepository);
  const car = await carsRepository.findCarById(carId);
  if (car)
    return response.json(car);
  else
    return response.json({ "message": "Car not found!" });
});

carsRouter.post('/', async (request, response) => {
  const {
    carName,
    brand,
    year,
    description,
    isSold,
    createdAt,
  } = request.body;
  const carsRepository = getCustomRepository(CarRepository);
  const car = carsRepository.create({ carName, brand, year, description, isSold, createdAt });
  await carsRepository.save(car);
  return response.json(car);
});

export default carsRouter;
