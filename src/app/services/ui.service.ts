import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) { }

  async showToast(message: string, duration: number){
      const toast = await this.toastController.create({
        message,
        duration
      });
      toast.present();
  }

  async showAlertConfirm(header: string, message: string) {
    return new Promise<boolean>( async (resolve, reject) => {
      const alert = await this.alertController.create({
        cssClass: 'alert-confirm',
        header,
        message,
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'alert-button-confirm',
            handler: () => {
              resolve(true);
            }
          }, {
            
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'alert-button-cancel',
            handler: () => {
              resolve(false);
            }
          }
        ]
      });
  
      await alert.present();
    })
  }

}
