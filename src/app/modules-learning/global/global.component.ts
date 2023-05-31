import { Component, OnInit, Inject } from '@angular/core';
import { InputSize } from "@progress/kendo-angular-inputs"
import { DropDownSize, DropDownFillMode } from "@progress/kendo-angular-dropdowns";

import { DataService } from "./data.service";
import { Product } from "./product.model";
import { fieldMapService01 } from "./field-map.service";
import { EvaluationFormPrecourseService } from "./evaluation-form-precourse.service";
import { EvaluationFormPostcourseService } from "./evaluation-form-postcourse.service";
import { EvaluationFormFeedbackService } from "./evaluation-form-feedbackForm.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css'],
  providers: [DataService, fieldMapService01, EvaluationFormPrecourseService, EvaluationFormPostcourseService, EvaluationFormFeedbackService],
})
export class GlobalComponent implements OnInit{

  //Toggle buttons
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
  public individualSetting: { text: string; id: number }[] = [
/*    { text: "Company 01", id: 2 },*/
  ];
  public interfaceElearning: { text: string; id: number }[] = []
  public interfaceLeave: { text: string; id: number }[] = []
  

  public data: Companies[]
  =[
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

  //Kendo DropdownList Local
  public days: Array<string> = ["01", "02", "03", "04", "05","06"]
  public days10: Array<string> = ["01", "02", "03", "04", "05","06","07","08","09","10"]
  public weeks: Array<string> = ["01", "02", "03", "04"]
  public months: Array<string> = ["01", "02", "03", "04","05","06","07","08","09","10","11","12"]
  public fillMode: DropDownFillMode = "flat"
  public options = [{
    type: "fillMode",
    data: ["solid", "flat", "outline"],
    default: this.fillMode,
  },
  ];


  //Kendo Dropdown List Remote Service
  public FieldMapping01: Array<Product> = [];
  public placeHolder: Product = {
    ProductName: "Select field...",
    ProductID: null,
  };

  constructor(
    @Inject(DataService) private dataService: DataService,
    @Inject(fieldMapService01) private fieldMapService: fieldMapService01,
    @Inject(EvaluationFormPrecourseService) private evaluationFormPrecourseService: EvaluationFormPrecourseService,
    @Inject(EvaluationFormPostcourseService) private evaluationFormPostcourse: EvaluationFormPostcourseService,
    @Inject(EvaluationFormFeedbackService) private evaluationFormFeedback: EvaluationFormFeedbackService,
  ) {
    this.fieldMap = fieldMapService;  //Kendo Dropdown List Remote Async Pipe
    this.fieldMapService.query();  //Kendo Dropdown List Remote Async Pipe

    this.EvaluationFormPrecourse = evaluationFormPrecourseService;
    this.evaluationFormPrecourseService.query();

    this.EvaluationFormPostcourse = evaluationFormPostcourse;
    this.evaluationFormPostcourse.query();

    this.EvaluationFormFeedback = evaluationFormFeedback;
    this.evaluationFormFeedback.query();
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe((data) => (this.FieldMapping01 = data));
  }
  //Kendo Dropdown List Remote Async Pipe
  public fieldMap: Observable<any>;
  public EvaluationFormPrecourse: Observable<any>;
  public EvaluationFormPostcourse: Observable<any>;
  public EvaluationFormFeedback: Observable<any>;
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
