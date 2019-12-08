import { Component, OnInit } from '@angular/core';
import { PostalCodesService } from '../postal-codes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue: string;
  constructor( private postalCodeService: PostalCodesService) { }

  ngOnInit() {
  }

  search() {
    this.postalCodeService.search(this.searchValue)
  }

}
