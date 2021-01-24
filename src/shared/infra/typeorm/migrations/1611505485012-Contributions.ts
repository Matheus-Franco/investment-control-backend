import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class Contributions1611505485012 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'contributions',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'investment_category',
              type: 'varchar',
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
              name: 'quantity',
              type: 'decimal',
            },
            {
              name: 'price_per_quota',
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
        'contributions',
        new TableForeignKey({
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          name: 'contribution_user_id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('contributions')
    }

}
