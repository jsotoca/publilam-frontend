import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subcategoria, SubcategoryResponse } from '../interfaces/subcategory.interface';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(
    public http: HttpClient
  ) { }

  async getSubcategoriesByCategory(id: string): Promise<Subcategoria[]> {
    const { subcategorias } = await this.http.get<SubcategoryResponse>(`https://publilam-backend.herokuapp.com/api/subcategory/category/${id}`).toPromise();
    return subcategorias;
  }

}
