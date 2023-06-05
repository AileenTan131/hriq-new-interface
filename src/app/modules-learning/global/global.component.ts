import { Component, Inject } from '@angular/core';
import { InputSize } from "@progress/kendo-angular-inputs"
import { DropDownSize, DropDownFillMode } from "@progress/kendo-angular-dropdowns";

import { fieldMapService01 } from "./field-map.service";
import { EvaluationFormPrecourseService } from "./evaluation-form-precourse.service";
import { EvaluationFormPostcourseService } from "./evaluation-form-postcourse.service";
import { EvaluationFormFeedbackService } from "./evaluation-form-feedbackForm.service";
import { Observable } from "rxjs";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css'],
  providers: [fieldMapService01, EvaluationFormPrecourseService, EvaluationFormPostcourseService, EvaluationFormFeedbackService],
})

export class GlobalComponent{
  public isDisabled = true;

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
  public checked22 = false;
  public checked23 = false;
  public checked24 = false;
  public checked25 = false;
  public checked26 = false;

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
  public mediumSize: DropDownSize = "medium";

  //Kendo DropdownList Local
  public selectedDay08 = "  ";
  public selectedWeek08 = "  ";
  public selectedMonth08 = "  ";

  public selectedDay09 = "  ";
  public selectedWeek09 = "  ";
  public selectedMonth09 = "  ";

  public selectedDay10 = "  ";
  public selectedWeek10 = "  ";
  public selectedMonth10 = "  ";

  public selectedDay11 = "  ";
  public selectedWeek11 = "  ";
  public selectedMonth11 = "  ";

  public selectedDay12 = "  ";
  public selectedWeek12 = "  ";
  public selectedMonth12 = "  ";

  public selectedDay13 = "  ";
  public selectedWeek13 = "  ";
  public selectedMonth13 = "  ";

  public selectedDay14 = "  ";
  public selectedWeek14 = "  ";
  public selectedMonth14 = "  ";

  public selectedDay15 = "  ";
  public selectedWeek15 = "  ";
  public selectedMonth15 = "  ";

  public selectedDay16 = "  ";
  public selectedWeek16 = "  ";
  public selectedMonth16 = "  ";

  public selectedDay17 = "  ";
  public selectedWeek17 = "  ";
  public selectedMonth17 = "  ";

  public days10: Array<string> = ["01", "02", "03", "04", "05","06","07","08","09","10"]
  public days: Array<string> = ["  ", "01", "02", "03", "04", "05","06","07"]
  public weeks: Array<string> = ["  ", "01", "02", "03", "04"]
  public month: Array<string> = ["  ","01", "02", "03", "04","05","06","07","08","09","10","11","12"]
  public fillMode: DropDownFillMode = "flat"
  public options = [{
    type: "fillMode",
    data: ["solid", "flat", "outline"],
    default: this.fillMode,
  },
  ];

  //Kendo Dropdown List Remote Async Pipe
  public fieldMap: Observable<any>;
  public evaluationFormPrecourse: Observable<any>;
  public evaluationFormPostcourse: Observable<any>;
  public evaluationFormFeedback: Observable<any>;

  constructor(
    @Inject(fieldMapService01) private fieldMapService: fieldMapService01,
    @Inject(EvaluationFormPrecourseService) private evaluationFormPrecourseService: EvaluationFormPrecourseService,
    @Inject(EvaluationFormPostcourseService) private evaluationFormPostcourseService: EvaluationFormPostcourseService,
    @Inject(EvaluationFormFeedbackService) private evaluationFormFeedbackService: EvaluationFormFeedbackService,
  ) {
    this.fieldMap = fieldMapService; 
    this.fieldMapService.query();

    this.evaluationFormPrecourse = evaluationFormPrecourseService;
    this.evaluationFormPrecourseService.query();

    this.evaluationFormPostcourse = evaluationFormPostcourseService;
    this.evaluationFormPostcourseService.query();

    this.evaluationFormFeedback = evaluationFormFeedbackService;
    this.evaluationFormFeedbackService.query();

  }

  //Kendo Numeric Input
  public value = '';
  public min = 0
  public monthsCheck = "true"

  //checkboxes
  public bondCalculation = new FormGroup({
    bond: new FormControl(),
 });

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
