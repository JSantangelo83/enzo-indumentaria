import { VentaContenido } from "./VentaContenido";

export interface Venta {
    contenido: VentaContenido[],
    total: number,
    fecha: Date,
}