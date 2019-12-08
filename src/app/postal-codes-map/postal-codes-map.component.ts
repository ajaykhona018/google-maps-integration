import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PostalCodesService } from '../postal-codes.service';

@Component({
  selector: 'app-postal-codes-map',
  templateUrl: './postal-codes-map.component.html',
  styleUrls: ['./postal-codes-map.component.scss']
})
export class PostalCodesMapComponent implements OnInit, AfterViewInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: google.maps.Map;
  defaultCenter: google.maps.LatLng = new google.maps.LatLng(0, 0);
  defaultZoom: number = 2;

  constructor(private postalCodesService: PostalCodesService) { }

  ngOnInit() {

  }

  configureMap(codeList) {
    if (this.postalCodesService.shouldCalculateCenter(codeList.length)) {
      if (codeList.length === 1) {
        const { latitude, longitude } = codeList[0];
        this.map.setCenter(new google.maps.LatLng(latitude, longitude));
        this.map.setZoom(15);
      } else {
        interface boundry {
          minLat: number,
          maxLat: number,
          minLong: number,
          maxLong: number
        };

        const boundryCordinates: boundry = codeList.reduce((range: boundry, currentCode) => {
          range.minLat = currentCode.latitude < range.minLat && currentCode.latitude;
          range.minLong = currentCode.longitude < range.minLong && currentCode.longitude;

          range.maxLat = currentCode.latitude > range.maxLat && currentCode.latitude;
          range.maxLong = currentCode.longitude > range.maxLong && currentCode.longitude;

          return range;
        }, { minLat: 90, minLong: 180, maxLat: -90, maxLong: -180 })

        const centerLatitude = (boundryCordinates.minLat + boundryCordinates.maxLat) / 2;
        const centerLongitude = (boundryCordinates.minLong + boundryCordinates.maxLong) / 2;
        const avgCord = new google.maps.LatLng(centerLatitude, centerLongitude);
        this.map.setCenter(avgCord);
      }
    } else {
      this.map.setCenter(this.defaultCenter)
      this.map.setZoom(this.defaultZoom)
    }

    codeList.forEach(code => {
      code.markerRef.setMap(this.map)
    })
  }

  ngAfterViewInit() {
    const mapProperties = {
      center: this.defaultCenter,
      zoom: this.defaultZoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.postalCodesService.postalCodesSource.subscribe(codeList => this.configureMap(codeList))
  }


}
