import { SubcategoryService } from './../../services/subcategory.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subcategoria } from 'src/app/interfaces/subcategory.interface';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  id: string = null;
  subcategories: Subcategoria[] = [];
  subcategoriesColor: string[] = [
    'var(--main-bg-1)',
    'var(--main-bg-2)',
    'var(--main-bg-3)',
    'var(--main-bg-4)',
    'var(--main-bg-5)',
    'var(--main-bg-6)',
    'var(--main-bg-7)',
    'var(--main-bg-8)',
    'var(--main-bg-9)',
    'var(--main-bg-10)',
    'var(--main-bg-11)',
    'var(--main-bg-12)',
    'var(--main-bg-13)',
    'var(--main-bg-14)',
    'var(--main-bg-15)',
  ];

  constructor(
    public activatedRoute: ActivatedRoute,
    public subcategoryService:SubcategoryService,
    public ui:UiService
  ) { }

  getId(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    this.getId();
    this.subcategories = await this.subcategoryService.getSubcategoriesByCategory(this.id);
  }

  async loadColor(i){
    console.log(this.ui.loadColors(i));
  }

}
