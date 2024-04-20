import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const synchronize = process.env.ENV === 'PROD' ? false : true;
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'zafirus',
      entities: [__dirname + '/modules/**/entity/*.entity.{ts,js}'],
      migrations: [
        /*...*/
      ],
      autoLoadEntities: true,
      synchronize: synchronize,
    }),
  ],
})
export class DatabaseModule {}
