import { UiService } from 'src/app/services/ui.service';
import { Component, OnInit } from '@angular/core';
import { OptionsSearchModalPage } from './../../pages/options-search-modal/options-search-modal.page';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  constructor(
    private ui:UiService
  ) { }

  ngOnInit() {}

  openSearchOptions(){
    this.ui.showModal(OptionsSearchModalPage);
  }

}
