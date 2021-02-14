import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  categorias: Categoria[] = [];
  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    slidesPerView: 3.5,
    freMode: true
  };

  constructor(
    private categoryService:CategoryService
  ) { }


  async ngOnInit() {
    this.categorias = await this.categoryService.getAllCategories();
  }

}
