import { Injectable } from '@angular/core';
import { postalCodesData } from '../../postal_codes_data.js'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostalCodesService {
  private postalCodeStaticData = postalCodesData
    .filter(code => {
      if (code.postal_code && code.latitude && code.longitude) {
        code.markerRef =  new google.maps.Marker({
          position: new google.maps.LatLng(code.latitude, code.longitude),
          title: code.postal_code,
          icon: 'http://maps.google.com/mapfiles/ms/icons/yellow.png'
        })
        return true
      } else {
        return false
      }
    })
  private postalCodesObserver = new BehaviorSubject(this.postalCodeStaticData)
  postalCodesSource = this.postalCodesObserver.asObservable()

  constructor() { }

  search(searchValue: string) {
    this.postalCodesObserver.next(this.postalCodeStaticData
      .filter(code => {
        if (code.postal_code.toLowerCase().includes(searchValue)) {
          code.markerRef.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png')
          code.markerRef.setZIndex(10000)
          return true
        } else {
          code.markerRef.setIcon('http://maps.google.com/mapfiles/ms/icons/grey.png')
          code.markerRef.setZIndex(0)
          return false
        }
      })
    )
  }

  shouldCalculateCenter(highlightCount: number) {
    const thresholdPercent = .5;
    return highlightCount / this.postalCodeStaticData.length <= thresholdPercent
  }

  getPostalCode(index: number) {
    return this.postalCodeStaticData[index]
  }
}
