import { Color } from "./Color";
import { Talle } from "./Talle";
import { TipoPrenda } from "./TipoPrenda";

export interface Prenda {
    tipo: TipoPrenda,
    cantidad: number,
    color: Color,
    talle: Talle,
    precio: number,
}