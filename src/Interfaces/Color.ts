import { EntidadBase } from "./EntidadBase";
import { NombreCodigo } from "./NombreCodigo";

export interface Color extends EntidadBase, NombreCodigo {
    hex: string;
}