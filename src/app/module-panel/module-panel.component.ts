import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DropDownSize } from "@progress/kendo-angular-dropdowns";
import { languages } from './languages';
import { ColorSchemesService } from '../color-schemes.service'


@Component({
  selector: 'app-module-panel',
  templateUrl: './module-panel.component.html',
  styleUrls: ['./module-panel.component.css']
})
export class ModulePanelComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private colorSchemes: ColorSchemesService) { }

  ngOnInit() { }

  showHomepage() {
    this.router.navigate(['homepage'], { relativeTo: this.route })
  }

  //Learning menu
  public menu = 'TRANSACTIONS';
  public hideLearningTransaction = false;
  public hideLearningReport = true;
  public hideLearningSetting = true;

  showLearningTransaction() {
    this.hideLearningTransaction = false;
    this.hideLearningReport = true;
    this.hideLearningSetting = true;
    return this.menu = 'TRANSACTIONS';
  }
  showLearningReport() {
    this.hideLearningTransaction = true;
    this.hideLearningReport = false;
    this.hideLearningSetting = true;
    return this.menu = 'REPORTS';
  }
  showLearningSetting() {
    this.hideLearningTransaction = true;
    this.hideLearningReport = true;
    this.hideLearningSetting = false;
    return this.menu = 'SYSTEM    ';
    /* this.router.navigate(['setting'], { relativeTo: this.route });*/
  }

  //Time Menu
  public hideTimeTransaction = false;
  public hideTimeExport = true;
  public hideTimeAttendance = true;
  public hideTimeSetting = true;

  showTimeTransaction() {
    this.hideTimeTransaction = false;
    this.hideTimeExport = true;
    this.hideTimeAttendance = true;
    this.hideTimeSetting = true;
    return this.menu = 'TRANSACTIONS';
  }
  showTimeExport() {
    this.hideTimeTransaction = true;
    this.hideTimeExport = false;
    this.hideTimeAttendance = true;
    this.hideTimeSetting = true;
    return this.menu = 'EXPORT'
  }

  showTimeAttendance() {
    this.hideTimeTransaction = true;
    this.hideTimeExport = true;
    this.hideTimeAttendance = false;
    this.hideTimeSetting = true;
    return this.menu = 'ATTENDANCE'
  }

  showTimeSetting() {
    this.hideTimeTransaction = true;
    this.hideTimeExport = true;
    this.hideTimeAttendance = true;
    this.hideTimeSetting = false;
    return this.menu = 'SYSTEM    ';
  }

  //Languages
  public languageSelect = languages;
  public selectedSize: DropDownSize = "large";


  //Color Scheme Menu
   setGreenData() {
      this.colorSchemes.setGreenData('green');
  }
  setRedData() {
    this.colorSchemes.setRedData('red');
  }


}
