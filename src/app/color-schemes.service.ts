import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { startWith } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ColorSchemesService {
  private serviceData = new BehaviorSubject<string>('Blue');
  data$ = this.serviceData;

  //Green Theme
  setData(data: string) {
    this.serviceData.next(data);
  }
  getData() {
    return this.serviceData.getValue();
  }
}
