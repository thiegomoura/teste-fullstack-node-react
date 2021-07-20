import { uuid } from 'uuidv4';

class Car {
  id: string;
  carName: string;
  year: number;
  description: string;
  isSold: boolean;
  createdAt: Date;

  constructor({ carName, year, description, isSold, createdAt }: Omit<Car, 'id'>) {
    this.id = uuid();
    this.carName = carName;
    this.year = year;
    this.description = description;
    this.isSold = isSold;
    this.createdAt = createdAt;
  }
}

export default Car;
