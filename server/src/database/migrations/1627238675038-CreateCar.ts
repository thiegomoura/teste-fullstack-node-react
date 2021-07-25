import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateCar1627238675038 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'cars',
              columns: [
                {
                  name: 'id',
                  type: 'varchar',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                },
                {
                  name: 'car_name',
                  type: 'varchar',
                },
                {
                  name: 'brand',
                  type: 'varchar',
                },
                {
                  name: 'year',
                  type: 'integer',
                },
                {
                  name: 'description',
                  type: 'varchar',
                },
                {
                  name: 'is_sold',
                  type: 'boolean',
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                }
              ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cars');
    }

}
