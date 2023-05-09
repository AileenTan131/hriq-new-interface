import {
    Component,
    ViewChild,
    ViewEncapsulation,
 } from "@angular/core";
import { GridComponent, FilterableSettings } from "@progress/kendo-angular-grid";
import { Customers } from "./customers";
import { Router, ActivatedRoute } from '@angular/router'
import { CustomersService } from "./customers.service";

@Component({
    selector: "app-lna-content-kendo",
    templateUrl: "./lna-content-kendo.component.html",
    styleUrls: ["./lna-content-kendo.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class LnaContentKendoComponent{
    public gridData: unknown[] = Customers;

    public filterMode: FilterableSettings = "menu";

    @ViewChild(GridComponent)
    public grid: GridComponent;



    constructor(
    private route: ActivatedRoute,
    private router: Router,
      private customerService: CustomersService,
    ) {
/*      const data = this.customerService.getCustomerData();
      data.subscribe({
        next: (data: string)=> {
          this.dataCustomer=data
      },
      error: (err: any) => {
        console.log(err);
      }
        })
      })*/
}

    public isCollapsed = false;

    textShow = false;

    public value = 5;
    public autoCorrect = false
  
  coursesInterested() {
      this.router.navigate(['courses-interested'], { relativeTo: this.route })
    }


/*  customerData: Customers[];

  getCustomers() {
    this.customerService.getCustomers().then(data => this.customerData = data)
  }
  ngOnInit() {
    this.getCustomers();
  }
  public gap = this.customerData.Gap;*/


  /*  customerData: any;*/
  public customerData = Customers


}
