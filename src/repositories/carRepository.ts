import Car from '../entities/Car';
interface CreateCarDTO {
  carName: string;
  year: number;
  description: string;
  isSold: boolean;
  createdAt: Date;
}
class CarRepository {
  private cars: Car[];

  constructor() {
    this.cars = [];
  }

  public index(): Car[] {
    return this.cars;
  }

  public findCarById(id: string): Car | null {
    const findCar = this.cars.filter(item => item.id === id);
    return findCar[0] || null;
  }

  public create({ carName, year, description, isSold, createdAt }: CreateCarDTO): Car {
    const car = new Car({ carName, year, description, isSold, createdAt });
    this.cars.push(car);
    return car;
  }
}

export default CarRepository;
