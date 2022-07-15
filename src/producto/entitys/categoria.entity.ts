import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    idCategoria:number;

    @Column("varchar")
    nombre:string;

    @OneToMany(() => Producto, (producto) => producto.categoria)
    productos: Producto[];
}