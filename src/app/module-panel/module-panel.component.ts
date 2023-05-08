import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DropDownSize } from "@progress/kendo-angular-dropdowns";
import { languages } from './languages';
import { ColorSchemesService } from '../color-schemes.service'


@Component({
  selector: 'app-module-panel',
  templateUrl: './module-panel.component.html',
  styleUrls: ['./module-panel.component.css']
})
export class ModulePanelComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private colorSchemes: ColorSchemesService,
  ) { }

 
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
  runTheme = 'Blue';

   setGreenData() {
     this.colorSchemes.setData('Green');
     this.runTheme = 'Green';
  }
  setRedData() {
    this.colorSchemes.setData('Red');
    this.runTheme = 'Red'
  }
  setBlueData() {
    this.colorSchemes.setData('Blue');
    this.runTheme = 'Blue'
  }
  setHydrangeaData() {
    this.colorSchemes.setData('Hydrangea');
    this.runTheme = 'Hydrangea'
  }
  setSakuraData() {
    this.colorSchemes.setData('Sakura');
    this.runTheme = 'Sakura'
  }
  setLavenderData() {
    this.colorSchemes.setData('Lavender');
    this.runTheme = 'Lavender'
  }
  setMediterraneanData() {
    this.colorSchemes.setData('Mediterranean');
    this.runTheme = 'Mediterranean'
  }
  setIndustrialData() {
    this.colorSchemes.setData('Industrial');
    this.runTheme = 'Industrial'
  }
  setMinimalistData() {
    this.colorSchemes.setData('Minimalist');
    this.runTheme = 'Minimalist'
  }
  setBohemianData() {
    this.colorSchemes.setData('Bohemian');
    this.runTheme = 'Bohemian'
  }
  setForestData() {
    this.colorSchemes.setData('Forest');
    this.runTheme = 'Forest'
  }
  setBeachData() {
    this.colorSchemes.setData('Beach');
    this.runTheme = 'Beach'
  }
  setSeaData() {
    this.colorSchemes.setData('Sea');
    this.runTheme = 'Sea'
  }
  setSpringData() {
    this.colorSchemes.setData('Spring');
    this.runTheme = 'Spring'
  }
  setWinterData() {
    this.colorSchemes.setData('Winter');
    this.runTheme = 'Winter'
  }
  setSummerData() {
    this.colorSchemes.setData('Summer');
    this.runTheme = 'Summer'
  }
  setAutumnData() {
    this.colorSchemes.setData('Autumn');
    this.runTheme = 'Autumn'
  }

  
}
