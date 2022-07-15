import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./categoria.entity";
import { Variacion } from "./variacion.entity";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    idProducto: number;

    @Column("varchar")
    nombre:string;

    @Column("varchar")
    descripcion:string;

    @Column()
    existencia:number;

    @Column()
    precio:number;
    
    @Column()
    cantidad:number;

    @Column()
    fecha:Date;

    @OneToMany(() => Variacion, (variacion) => variacion.producto, {
        eager:true
    })
    variaciones: Variacion[];

    @ManyToOne(() => Categoria, (categoria) => categoria.productos, {
        eager:true
    })
    @JoinColumn({ name: "idCategoria" })
    categoria:Categoria
}