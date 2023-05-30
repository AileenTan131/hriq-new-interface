import { Component } from '@angular/core';
import { InputSize } from "@progress/kendo-angular-inputs"
import { DropDownSize, DropDownFillMode } from "@progress/kendo-angular-dropdowns";

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent {
  public checked01 = false;
  public checked02 = false;
  public checked03 = false;
  public checked04 = false;
  public checked05 = false;
  public checked06 = false;
  public checked07 = false;
  public checked08 = false;
  public checked09 = false;
  public checked10 = false;
  public checked11 = false;
  public checked12 = false;
  public checked13 = false;
  public checked14 = false;
  public checked15 = false;
  public checked16 = false;
  public checked17 = false;
  public checked18 = false;
  public checked19 = false;
  public checked20 = false;
  public checked21 = false;

  public size: InputSize = "small"

  //Kendo MultiSelect Tree
  public value: { text: string; id: number }[] = [
/*    { text: "Company 01", id: 2 },*/
  ];

  public data: Companies[] = [
    {
      text: "Company A",
      id: 1,
      company: [
        { text: "Company 01", id: 2 },
        { text: "Company 02", id: 3 },
        { text: "Company 03", id: 4 },
      ],
    },
    {
      text: "Company B",
      id: 5,
      company: [
        { text: "Company 04", id: 6 },
        { text: "Company 05", id: 7 },
      ],
    },
    {
      text: "Company C",
      id: 8,
      company: [{ text: "Company 06", id: 9 }],
    },
  ];

  public tagMapper(tags: any[]): any[] {
    return tags.length < 20 ? tags : [tags];
  }

  public itemDisabled(dataItem: any, index: string) {
    return [
      dataItem.id === 1,  // disable the 2nd root item
      dataItem.id === 5,
      dataItem.id === 8
    ]
  }

  public selectedSize: DropDownSize = "small";

  //Kendo DropdownList
  public days: Array<string> = ["01", "02", "03", "04", "05","06"]
  public weeks: Array<string> = ["01", "02", "03", "04"]
  public months: Array<string> = ["01", "02", "03", "04","05","06","07","08","09","10","11","12"]
  public fillMode: DropDownFillMode = "flat"
  public options = [{
    type: "fillMode",
    data: ["solid", "flat", "outline"],
    default: this.fillMode,
  },
  ];
}


//Kendo MultiSelect Tree - Model
type Companies = {
  text: string;
  id: number;
  company: Company[];
};
type Company = {
  text: string;
  id: number;
};
