import { EntidadBase } from "./EntidadBase";
import { Prenda } from "./Prenda";

export interface StockPrenda extends EntidadBase {
    cantidad: number,
    prenda: Prenda,
}





