import { EntidadBase } from "./EntidadBase";
import { VentaContenido } from "./VentaContenido";

export interface Venta extends EntidadBase {
    contenido: VentaContenido[],
    total: number,
    fecha: Date,
}