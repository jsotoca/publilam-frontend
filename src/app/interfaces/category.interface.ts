export interface CategoryResponse {
  categorias: Categoria[];
}

export interface Categoria {
  id_categoria: number;
  nombre: string;
  descripcion: string;
  icono: string;
  portada: string;
}