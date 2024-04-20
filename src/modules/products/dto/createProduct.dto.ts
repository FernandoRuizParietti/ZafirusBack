import { EnumTalles } from 'src/core/enum/product.enum';

export class CreateProductDto {
  codigo: string;
  nombre: string;
  id_categoria: number;
  precio: number;
  talle: EnumTalles;
}
