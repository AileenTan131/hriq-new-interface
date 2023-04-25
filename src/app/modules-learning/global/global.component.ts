import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css'], encapsulation: ViewEncapsulation.None,
})
export class GlobalComponent {
  public gridData = [
    {
      SN: 1,
      CompetencyType: 'Technical',
      Skills: 'Understands internal and external customer requirements, customer needs and organisation’s service standards and takes initiative to provide value-added advice/ suggestions to address needs.',
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
      CurrentRate: '3/5',
      RequiredRate: '4/5',
      Gap: '-2',
      Piority: '3',
      CoursesInterested: 'My Training Plan',
      TotalHours: '7',
      TotalBudget: '$1500',
    }
  ];
}
