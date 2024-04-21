import { IProduct } from 'src/core/enum';
import { EnumTalles } from 'src/core/enum/product.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product implements IProduct {
  categoria: string;

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 30 })
  codigo: string;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column()
  id_categoria: number;

  @Column()
  precio: number;

  @Column({ default: EnumTalles.MEDIUM })
  talle: EnumTalles;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
