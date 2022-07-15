import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Categoria } from './producto/entitys/categoria.entity';
import { Foto } from './producto/entitys/foto.entity';
import { Producto } from './producto/entitys/producto.entity';
import { Variacion } from './producto/entitys/Variacion.entity';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'ecomerce-desarrollo.database.windows.net',
      port: 1433,
      username: 'chernandez',
      password: ':.oTTyZVUQ$=',
      database: 'ecomerce-desarrollo',
      entities: [Producto, Foto, Categoria, Variacion],
      synchronize: true,
      // autoLoadEntities: true,
    }),
    ProductoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
