import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AdsMainComponent } from './ads-main/ads-main.component';



@NgModule({
  declarations: [ HeaderComponent, SearchBarComponent, AdsMainComponent ],
  exports: [ HeaderComponent, SearchBarComponent, AdsMainComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
