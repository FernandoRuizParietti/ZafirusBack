import { EnumTalles } from '../enum/product.enum';

export interface IProduct {
  id: number;
  codigo: string;
  nombre: string;
  id_categoria: number;
  precio: number;
  talle: EnumTalles;
}
