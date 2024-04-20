import { IProduct } from 'src/core/enum';
import { EnumTalles } from 'src/core/enum/product.enum';
import { Category } from 'src/modules/categories/entity/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product implements IProduct {
  categoria: string;

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 30, unique: true })
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
