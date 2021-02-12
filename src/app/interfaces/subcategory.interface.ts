export interface SubcategoryResponse {
    subcategorias: Subcategoria[];
}
  
export interface Subcategoria {
  id_subcategoria: number;
  nombre: string;
  descripcion: string;
  portada: string;
  icono: string;
  categoria: number;
}