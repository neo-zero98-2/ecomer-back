import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";
import { Variacion } from "./Variacion.entity";

@Entity()
export class Foto {

    @PrimaryGeneratedColumn()
    idFoto:number;

    @Column("varchar", { length: 1000 })
    link:string;

    @ManyToOne(() => Variacion, (variacion) => variacion.fotos)
    @JoinColumn({ name: "idVariacion" })
    variacion:Variacion;
}