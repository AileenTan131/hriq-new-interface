import { Injectable } from '@angular/core';
import { Customers } from "./customers";
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {




  private customerData = new BehaviorSubject('');
  data$ = Customers;

  geCustomerData() {
    return this.customerData.asObservable();
  }


}
