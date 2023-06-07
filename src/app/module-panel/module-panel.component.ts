import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from "@progress/kendo-angular-notification";
import { DropDownSize } from "@progress/kendo-angular-dropdowns";

import { languages } from './languages';
import { PasswordValidator } from './password.validator';

import { ColorSchemesService } from '../color-schemes.service';


@Component({
  selector: 'app-module-panel',
  templateUrl: './module-panel.component.html',
  styleUrls: ['./module-panel.component.css']
})
export class ModulePanelComponent {
  constructor(
    private colorSchemes: ColorSchemesService,
    private fb: FormBuilder,
    private notificationService: NotificationService,
  ) {
    this.colorSchemes.data$.subscribe(data => {
      this.runTheme = data;
    })
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
    this.notificationService.show({
      content: "Your password has been updated!",
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "slide", duration: 600 },
      hideAfter: 3000,
      type: { style: "success", icon: true, },
    })
  }

  //Languages
  public languageSelect = languages;
  public selectedSize: DropDownSize = "large";


  Kvalue = '';
  alertLanguageUpdate(data) {
    this.Kvalue = data,
      this.notificationService.show({
      content: this.Kvalue + " language has been applied!" ,
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "slide", duration: 600 },
      hideAfter: 3000,
      type: { style: "success", icon: true, },
    })
  }
   

  //Color Scheme Menu
  runTheme: any;

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
    this.notificationService.show({
      content: this.runTheme + " theme has been applied!",
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "slide", duration: 600 },
      hideAfter: 3000,
      type: { style: "success", icon: true,},
      })
  }
}
