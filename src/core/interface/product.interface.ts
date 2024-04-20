import { EnumTalles } from '../enum/product.enum';

export interface IProduct {
  id: number;
  codigo: string;
  nombre: string;
  precio: number;
  talle: EnumTalles;
  categoria: string;
}
