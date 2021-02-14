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
      await this.location.saveCurrentPosition();
      this.loadLocation();
    } catch (error) {
      this.ui.showToast('Ocurrio un error obteniendo tu ubicación.', 1500);
    }
  }

  async loadLocation(){
    const location = this.location.myCurrentPosition.myDistrict;
    if(location) this.district = location;
  }

}
