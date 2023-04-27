import {
    Component,
    ViewChild,
    ViewEncapsulation,
    NgZone,
    AfterViewInit } from "@angular/core";
import { take } from "rxjs/operators";
import { GridComponent, FilterableSettings } from "@progress/kendo-angular-grid";
import { Customers } from "./customers";
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: "app-lna-content-kendo",
    templateUrl: "./lna-content-kendo.component.html",
    styleUrls: ["./lna-content-kendo.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class LnaContentKendoComponent implements AfterViewInit {
    public gridData: unknown[] = Customers;

    public filterMode: FilterableSettings = "menu";

    @ViewChild(GridComponent)
    public grid: GridComponent;
  constructor(private ngZone: NgZone, private route: ActivatedRoute, private router: Router) {}
    public ngAfterViewInit(): void {
        this.fitColumns();
    }
    public onDataStateChange(): void {
        this.fitColumns();
    }
    private fitColumns(): void {
        this.ngZone.onStable
            .asObservable()
            .pipe(take(1))
            .subscribe(() => {
                this.grid.autoFitColumns();
            });
    }

    public isCollapsed = false;

  textShow = false;

  public value = 5;
  public autoCorrect = false

  showHomepage() {
    this.router.navigate(['homepage'], { relativeTo: this.route })
  }

    /*  $("#grid").kendoGrid({
    columns: [{
      field: "CoursesInterested",
      template: '<a href="\\#">#= name#</a>'
  }],
    dataSource: gridData
  });*/
}
