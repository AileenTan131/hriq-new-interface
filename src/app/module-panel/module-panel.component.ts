import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DropDownSize } from "@progress/kendo-angular-dropdowns";
import { languages } from './languages';
import { PasswordValidator } from './password.validator';
import { ColorSchemesService } from '../color-schemes.service';
import { FormBuilder } from '@angular/forms';


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
    private fb: FormBuilder,
  ) { }

 
  showHomepage() {
    this.router.navigate(['homepage'], { relativeTo: this.route })
  }

  //Learning menu
  public menu = 'TRANSACTIONS'

  showLearningTransaction() {
    this.menu = 'TRANSACTIONS'; 
  }
  showLearningReport() {
    this.menu = 'REPORTS'; 
  }
  showLearningSetting() {
    this.menu = 'SYSTEM'; 

  }

  //Time Menu
  showTimeTransaction() {
    this.menu = 'TRANSACTIONS';
  }
  showTimeExport() {
    this.menu = 'EXPORT'
  }
  showTimeAttendance() {
    this.menu = 'ATTENDANCE'
  }
  showTimeSetting() {
   this.menu = 'SYSTEM    ';
  }

  //Set New Password
  get password() {
    return this.registrationForm.get('oldPassword')
  }
  get newPassword() {
    return this.registrationForm.get('newPassword')
  }

  registrationForm = this.fb.group({
    oldPassword: [''],
    newPassword: [''],
    confirmPassword: [''],
  }, { validator: PasswordValidator });

  alertPasswordUpdate() {
    alert("Your password has been updated!");
  }

  //Languages
  public languageSelect = languages;
  public selectedSize: DropDownSize = "large";

  alertLanguageUpdate() {
/*    alert("Your language has been changed to" + this.data("kendoDropDownList").value())*/
  }

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

  alertThemeApplied() { 
     alert(this.runTheme + " theme has been applied!");
  }
}
