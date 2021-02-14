import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    public toastController: ToastController
  ) { }

  async showToast(message: string, duration: number){
      const toast = await this.toastController.create({
        message,
        duration
      });
      toast.present();
  }

}
