import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ColorSchemesService {
  private serviceData = new BehaviorSubject<any>(null);
  data$ = this.serviceData.asObservable();

  //Green Theme
  setData(data: any) {
    this.serviceData.next(data);
  }
  getData() {
    return this.serviceData.getValue();
  }
}
