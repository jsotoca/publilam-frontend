import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  categories: Categoria[] = [];
  categoriesColor: string[] = [
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
    private categoryService:CategoryService,
    private router:Router
  ) { }

  async ngOnInit() {
    this.categories = await this.categoryService.getAllCategories();
  }

  async goCategory(id: string){
    this.router.navigate(['category',id]);
  }

}
