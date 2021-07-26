import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  carName: string;

  @Column()
  brand: string;

  @Column('int')
  year: number;

  @Column()
  description: string;

  @Column('boolean')
  isSold: boolean;

  @CreateDateColumn()
  createdAt: Date;
}

export default Car;
