import { IsEnum, IsNumber, IsString } from 'class-validator';
import { IProduct } from 'src/core/enum';
import { EnumTalles } from 'src/core/interface';

export class CreateProductDto implements Omit<IProduct, 'id'> {
  @IsString()
  codigo: string;

  @IsString()
  nombre: string;

  @IsNumber()
  id_categoria: number;

  @IsNumber()
  precio: number;

  @IsEnum(EnumTalles)
  talle: EnumTalles;
}
