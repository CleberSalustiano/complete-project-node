import { MigrationInterface, QueryRunner, Table } from "typeorm"

export default class CreateAppoinments1648769785348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "appointments",
          columns: [
            {
              name: "id",
              type: "varchar",
              isPrimary: true,
              generationStrategy: "uuid",
            },
            {
              name: "provider",
              type: "varchar",
              isNullable: false,
            },
            {
              name: "date",
              type: "timestamp with time zone", //funciona só no postgres
              //Caso fosse fazer em qualquer outro banco de dados
              //Utilizar only typestamp
              isNullable: false,
            }
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("appointments")
    }

}
