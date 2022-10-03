import { Color } from "./Color";
import { Talle } from "./Talle";
import { TipoPrenda } from "./TipoPrenda";

import { EntidadBase } from "./EntidadBase";
export interface Prenda extends EntidadBase {
    tipo: TipoPrenda,
    color: Color,
    talle: Talle,
    precio: number,
}