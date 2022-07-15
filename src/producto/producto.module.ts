import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entitys/categoria.entity';
import { Producto } from './entitys/producto.entity';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, Categoria])],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}
