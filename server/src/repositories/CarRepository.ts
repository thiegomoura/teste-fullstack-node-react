import Car from '../entities/Car';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Car)
class CarRepository extends Repository<Car>{
  public async findCarById(id: string): Promise<Car | null> {
    const findCar = await this.findOne(id)
    return findCar || null;
  }
}

export default CarRepository;
