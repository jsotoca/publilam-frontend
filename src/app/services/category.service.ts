import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria, CategoryResponse } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }

  async getAllCategories(): Promise<Categoria[]> {
    const { categorias } = await this.http.get<CategoryResponse>('https://publilam-backend.herokuapp.com/api/category').toPromise();
    return categorias;
  }
  
}
