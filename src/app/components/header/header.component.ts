import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() showSearchBar: boolean = false;
  district: string = '';
  
  constructor(
    private location: LocationService,
    private ui:UiService
  ) { }

  ngOnInit() {
    this.loadLocation();
  }

  async saveLocation(){
    try {
      const value = await this.ui.showAlertConfirm('Ubicar tu posición', `Te encuentras en ${this.district}, ¿deseas activar tu posición?`);
      if(value){
        await this.location.saveCurrentPosition();
        this.loadLocation();
        this.ui.showToast(`Te encuentras en ${this.district}.`, 1500);
      }
    } catch (error) {
      this.ui.showToast('Ocurrio un error obteniendo tu ubicación.', 1500);
    }
  }

  async loadLocation(){
    const location = this.location.myCurrentPosition.myDistrict;
    if(location) this.district = location;
  }

}
