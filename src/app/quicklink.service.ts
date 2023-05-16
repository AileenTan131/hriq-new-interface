import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuicklinkService {
  public quicklinkData = new BehaviorSubject<string>(null);
  $quicklinkData = this.quicklinkData;

  setQuicklinkData(data: string) {
    this.quicklinkData.next(data);
  }
  getQuicklinkData() {
    return this.quicklinkData.getValue();
  }
}
