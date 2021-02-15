import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-options-search-modal',
  templateUrl: './options-search-modal.page.html',
  styleUrls: ['./options-search-modal.page.scss'],
})
export class OptionsSearchModalPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
