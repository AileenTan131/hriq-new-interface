import { Component } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})

export class HomepageComponent {
  public name = "Jesicca";
  toggleOff = false

  public notifications = [
    "Your leave has been approved",
    "Reminder to submit your appraisal"
  ]

  public actions = [
    "Pending approval HR employee data changes",
    "Moderation",
    "HR alerts"
  ]
  public actionNo = [
    "3",
    "1",
    "10"
  ]



  }
