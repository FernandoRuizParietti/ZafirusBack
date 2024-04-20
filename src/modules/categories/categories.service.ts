import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriRepository: Repository<Category>,
  ) {}

  async onModuleInit() {
    const categories = await this.categoriRepository.find();

    if (!categories.length) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      for (let i = 0; i < 5; i++) {
        const category = new Category();

        category.nombre =
          alphabet.charAt(Math.floor(Math.random() * alphabet.length)) +
          '-' +
          Math.random() * 100;
        category.activa = Math.random() > 0.5;
        category.descripcion = 'SARAZA';

        await this.categoriRepository.save(category);
      }
    }
  }
}
