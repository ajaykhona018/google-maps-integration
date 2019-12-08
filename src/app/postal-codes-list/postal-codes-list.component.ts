import { Component, OnInit } from '@angular/core';
import { PostalCodesService } from '../postal-codes.service'

@Component({
  selector: 'app-postal-codes-list',
  templateUrl: './postal-codes-list.component.html',
  styleUrls: ['./postal-codes-list.component.scss']
})
export class PostalCodesListComponent implements OnInit {
  postalCodesList: any
  isSelectionMode: boolean = false;
  selectedIndex:number = -1;

  constructor(private postalCodesService: PostalCodesService) { }

  ngOnInit() {
    this.postalCodesService.postalCodesSource.subscribe(codesList => {
      if (!this.isSelectionMode) {
        this.postalCodesList = codesList
      } else {
        this.isSelectionMode = false;
      }
    })
  }

  selectPostalCode(postalCodeObj, index) {
    this.isSelectionMode = true;

    if (this.selectedIndex !== index) {
      this.selectedIndex = index;
      this.postalCodesService.search(postalCodeObj.postal_code);
    } else {
      this.selectedIndex = -1;
      this.postalCodesService.search('');
    }
  }
}
