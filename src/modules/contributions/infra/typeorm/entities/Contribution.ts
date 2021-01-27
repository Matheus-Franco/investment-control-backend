import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('contributions')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  investment_category: string;

  @Column()
  company_name: string;

  @Column()
  symbol: string;

  @Column('decimal')
  quantity: number;

  @Column('decimal')
  price_per_quota: number;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
