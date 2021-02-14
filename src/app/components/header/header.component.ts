import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() showSearchBar: boolean = false;
  district: string = '';
  
  constructor(
    private location: LocationService
  ) { }

  ngOnInit() {
    this.loadLocation();
  }

  async saveLocation(){
    await this.location.saveCurrentPosition();
    this.loadLocation();
  }

  async loadLocation(){
    const location = this.location.myCurrentPosition.myDistrict;
    if(location) this.district = location;
  }

}
