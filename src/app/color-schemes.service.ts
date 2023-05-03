import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ColorSchemesService {
  private serviceData = new BehaviorSubject<any>(null);
  data$ = this.serviceData.asObservable();

  //Green Theme
  setGreenData(data: any) {
    this.serviceData.next(data);
  }
  getGreenData() {
    return this.serviceData.getValue();
  }

  //Red Theme
  setRedData(data: any) {
    this.serviceData.next(data);
  }
  getRedData() {
    return this.serviceData.getValue();
  }
}
