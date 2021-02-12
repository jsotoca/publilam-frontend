import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [ HeaderComponent, SearchBarComponent ],
  exports: [ HeaderComponent, SearchBarComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
