import { Component } from '@angular/core';
import { InputSize } from "@progress/kendo-angular-inputs"


@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent {
  public checked01 = true;
  public checked02 = true;
  public checked03 = true;

  public size: InputSize = "small"

}
