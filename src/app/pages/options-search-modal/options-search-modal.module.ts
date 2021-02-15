import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsSearchModalPageRoutingModule } from './options-search-modal-routing.module';

import { OptionsSearchModalPage } from './options-search-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsSearchModalPageRoutingModule
  ],
  declarations: [OptionsSearchModalPage]
})
export class OptionsSearchModalPageModule {}
