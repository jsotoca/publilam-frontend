import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AdsMainComponent } from './ads-main/ads-main.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecentsBusinessComponent } from './recents-business/recents-business.component';



@NgModule({
  declarations: [ 
    HeaderComponent, SearchBarComponent, AdsMainComponent, CategoriesComponent, 
    RecentsBusinessComponent, MapComponent 
  ],
  exports: [ 
    HeaderComponent, SearchBarComponent, AdsMainComponent, CategoriesComponent, 
    RecentsBusinessComponent, MapComponent 
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
