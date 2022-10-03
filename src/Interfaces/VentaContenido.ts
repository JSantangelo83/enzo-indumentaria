import { EntidadBase } from "./EntidadBase";
import { Prenda } from "./Prenda";

export interface VentaContenido extends EntidadBase {
    prenda: Prenda,
    cantidad: number,
}