import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorFiltersService {
  private serviceFilter = new BehaviorSubject<any>(null);
  filterData = this.serviceFilter.asObservable();

  setData(data: any) {
    this.serviceFilter.next(data);
  }

}





