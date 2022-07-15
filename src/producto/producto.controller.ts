import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FiltersDTO } from './dtos/filtros.dto';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(
        private productservice: ProductoService,
    ) { }

    @Get()
    findAll(@Query('pageNo') skip:number) {
        return this.productservice.findAll(skip);
    }

    @Get('/:id')
    finById(@Param('id') idProducto:number){        
        return this.productservice.findById(idProducto);
    }

    @Get('/busqueda/:word')
    findByKeyWord(@Param('word') word:string){  
        return this.productservice.findByKeyWord(word);
    }

    @Post()
    findByFilters(@Body() filtros:FiltersDTO){
        return this.productservice.findByFilters(filtros);
    }

    @Get('/saludo/:id')
    saludo(@Param('id') id:string){
        return this.productservice.findCategories();
    }



}
