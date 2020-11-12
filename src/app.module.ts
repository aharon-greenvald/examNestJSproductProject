import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username:'postgres',
      password:'aron1988',
      port:5432,
      host:'127.0.0.1',
      database:'product',
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}']
    }),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
