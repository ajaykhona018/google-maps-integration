import { Component, OnInit } from '@angular/core';
import { PostalCodesService } from '../postal-codes.service'

@Component({
  selector: 'app-postal-codes-list',
  templateUrl: './postal-codes-list.component.html',
  styleUrls: ['./postal-codes-list.component.scss']
})
export class PostalCodesListComponent implements OnInit {
  postalCodesList: any

  constructor(private postalCodesService: PostalCodesService) { }

  ngOnInit() {
    this.postalCodesService.postalCodesSource.subscribe(codesList => this.postalCodesList = codesList)
  }

}
