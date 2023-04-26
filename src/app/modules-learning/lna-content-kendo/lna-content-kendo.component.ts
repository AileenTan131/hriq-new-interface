import { Component, ViewChild, ViewEncapsulation, NgZone, AfterViewInit } from '@angular/core';
import { take } from "rxjs/operators";
import { GridComponent } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-lna-content-kendo',
  templateUrl: './lna-content-kendo.component.html',
  styleUrls: ['./lna-content-kendo.component.css'], encapsulation: ViewEncapsulation.None,
})
export class LnaContentKendoComponent implements AfterViewInit {
  public gridData = [
    {
      SN: 1,
      CompetencyType: 'Technical',
      Skills: 'Understands internal and external customer requirements, customer needs and organisation’s service standards and takes initiative to provide value-added advice/ suggestions to address needs.',
      Attachment: '',
      CurrentRate: '3/5',
      RequiredRate: '3/5',
      Gap: '0',
      Piority: '2',
      CoursesInterested: 'My Training Plan',
      TotalHours: '10',
      TotalBudget: '$3000',
    },
    {
      SN: 2,
      CompetencyType: 'Technical',
      Skills: 'Escalates suggestions on how to provide better services',
      Attachment: '',
      CurrentRate: '3/5',
      RequiredRate: '4/5',
      Gap: '-1',
      Piority: '3',
      CoursesInterested: 'My Training Plan',
      TotalHours: '7',
      TotalBudget: '$1500',
    },
    {
      SN: 3,
      CompetencyType: 'Technical',
      Skills: 'Builds rapport with internal and external customers and maintains customers’ trust by providing prompt, effective and quality service, takes continued interest in customers’ affairs.',
      Attachment: '',
      CurrentRate: '3/5',
      RequiredRate: '1/5',
      Gap: '2',
      Piority: '4',
      CoursesInterested: 'My Training Plan',
      TotalHours: '8',
      TotalBudget: '$2200',
    },
    {
      SN: 3,
      CompetencyType: 'Technical',
      Skills: 'Escalates suggestions on how to provide better services',
      Attachment: '',
      CurrentRate: '3/5',
      RequiredRate: '4/5',
      Gap: '-2',
      Piority: '3',
      CoursesInterested: 'My Training Plan',
      TotalHours: '7',
      TotalBudget: '$1500',
    }
  ];

  @ViewChild(GridComponent)
  public grid: GridComponent;
  constructor(private ngZone: NgZone) { }
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

}
