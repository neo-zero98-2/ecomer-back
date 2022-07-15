import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, MoreThanOrEqual, Repository } from 'typeorm';
import { FiltersDTO } from './dtos/filtros.dto';
import { Categoria } from './entitys/categoria.entity';
import { Producto } from './entitys/producto.entity';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private repo: Repository<Producto>,

        @InjectRepository(Categoria)
        private categoriaRepo: Repository<Categoria>,

    ) { }
    
    findAll(skip: number) {
        const take = 4;
        return this.repo.find({
            skip: take * (skip - 1),
            take,
            order: {
                fecha: "DESC"
            }
        });
    }

    findById(idProducto: number) {
        return idProducto ? this.repo.find({ 
            where: {
                idProducto
            }
        }) : null;
    }

    findByKeyWord(palabraClave:string) {
        return this.repo.find({
            where: [
                {nombre: Like(`%${palabraClave}%`)},
                {descripcion: Like(`%${palabraClave}%`)}
            ],
            order: {
                fecha: "DESC"
            },
            
        });
    }

    findByFilters({idCategoria, 
                existencia, 
                precioMinimo,
                precioMaximo}:FiltersDTO){
        return this.repo.find({
            where: {
                categoria: {
                    idCategoria:idCategoria
                },
                existencia: MoreThanOrEqual(1),
                precio: Between(precioMinimo,precioMaximo)
            },
            order: {
                fecha: "DESC"
            }
        })
    }

    findCategories(){
        return this.categoriaRepo.find();
    }

}
