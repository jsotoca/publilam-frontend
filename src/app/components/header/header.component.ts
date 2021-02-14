import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() showSearchBar: boolean = false;

  constructor(
    private location: LocationService
  ) { }

  ngOnInit() {}

  saveLocation(){
    this.location.saveCurrentPosition();
  }

}
