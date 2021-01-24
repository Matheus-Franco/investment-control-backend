import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class Sales1611506444157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'sales',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'company_name',
              type: 'varchar',
            },
            {
              name: 'symbol',
              type: 'varchar',
            },
            {
              name: 'sale_value',
              type: 'decimal',
            },
            {
              name: 'user_id',
              type: 'uuid',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ]
        })
      );

      await queryRunner.createForeignKey(
        'sales',
        new TableForeignKey({
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          name: 'sale_user_id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('sales')
    }

}
