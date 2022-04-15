import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export default class AlterProviderFieldToProviderId1650064353720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('appointments', 'provider');

      await queryRunner.addColumn('appointments', new TableColumn ({
        name: 'provider_id',
        type: 'uuid',
        isNullable: true,
      })
      );

      await queryRunner.createForeignKey('appointments', new TableForeignKey({
        name: 'AppointmentProvider',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        //can be: RESTRICT (don't delete the user)
        //can be: SET NULL (set the provider id like null)
        //can be: CASCADE (if delete one, delete all)
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('appointments', 'AppointmentProvider')

      await queryRunner.dropColumn('appointments', 'provider_id')

      await queryRunner.addColumn('appointments', new TableColumn({
        name: 'provider',
        type: 'varchar'
      }))
    }

}
