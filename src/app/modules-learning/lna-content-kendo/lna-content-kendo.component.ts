import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { GridComponent, FilterableSettings } from "@progress/kendo-angular-grid";
import { Router, ActivatedRoute } from '@angular/router'
import { Customers } from "./customers";
import { Model } from "./model";

import { CustomersService } from "./customers.service";
import { QuicklinkService } from "../../quicklink.service";

@Component({
    selector: "app-lna-content-kendo",
    templateUrl: "./lna-content-kendo.component.html",
    styleUrls: ["./lna-content-kendo.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class LnaContentKendoComponent{
    public gridData: Model[] = Customers;
    public data = Customers;
    public filterMode: FilterableSettings = "menu";

    @ViewChild(GridComponent)

    public grid: GridComponent;


    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomersService,
    private quicklinkService: QuicklinkService,
  ) { }

  coursesInterested() {
      this.router.navigate(['courses-interested'], { relativeTo: this.route })
    }

    public isCollapsed = false;

    public textShow = false;

    public value = 5;
    public autoCorrect = false
  
    public customerData = Customers

  quicklink(event) {
    this.quicklinkService.setQuicklinkData('Learning Needs');
    event.preventDefault();
  }
  send(event) {
    this.quicklinkService.setQuicklinkData('send plane');
    event.preventDefault();
  }



  //Checkboxes to hide columns
  public columns: string[] = ["SN", "Competency Type", "Skills", "Attachment", "Current Rate", "Required Rate", "Gap", "Piority", "Courses Interested", "Hours", "Budget", "Remarks"];
  public hiddenColumns: string[] = [];

  public isHidden(columnName: string): boolean {
    return this.hiddenColumns.indexOf(columnName) > -1;
  }

  public isDisabled(columnName: string): boolean {
    return (
      this.columns.length - this.hiddenColumns.length === 1 &&
      !this.isHidden(columnName)
    );
  }

  public hideColumn(columnName: string): void {
    const hiddenColumns = this.hiddenColumns;

    if (!this.isHidden(columnName)) {
      hiddenColumns.push(columnName);
    } else {
      hiddenColumns.splice(hiddenColumns.indexOf(columnName), 1);
    }
  }

}
