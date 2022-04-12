"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class CreateAppoinments1648769785348 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "appointments",
            columns: [
                {
                    name: "id",
                    type: "varchar",
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
                    type: "timestamp with time zone",
                    //Caso fosse fazer em qualquer outro banco de dados
                    //Utilizar only typestamp
                    isNullable: false,
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("appointments");
    }
}
exports.default = CreateAppoinments1648769785348;
