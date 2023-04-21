import { Component } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
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
  /*...*/
}
  ];
}
