import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Foto } from "./foto.entity";
import { Producto } from "./producto.entity";

@Entity()
export class Variacion {
    @PrimaryGeneratedColumn()
    idVariacion:number;

    @Column("varchar")
    nombre:string;
    
    @OneToMany(() => Foto, (foto) => foto.variacion, {
        eager:true
    })
    fotos: Foto[];

    @ManyToOne(() => Producto, (producto) => producto.variaciones)
    @JoinColumn({ name: "idProducto" })
    producto:Producto;
}