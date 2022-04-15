import { MigrationInterface, QueryRunner, Table } from "typeorm"

export default class CreateAppoinments1648769785348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "appointments",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
              generationStrategy: "uuid",
              default: "uuid_generate_v4()"
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
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'update_at',
              type: 'timestamp',
              default: 'now()',
            }
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("appointments")
    }

}
