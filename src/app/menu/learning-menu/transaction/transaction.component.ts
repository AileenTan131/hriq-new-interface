import { Component } from '@angular/core';
import { ColorSchemesService } from '../../../color-schemes.service';


@Component({
  selector: 'learning-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  runTheme ='';

  setGreenData() {
    this.runTheme = 'Green'
  }
  setRedData() {
    this.runTheme = 'Red'
  }
  setBlueData() {
    this.runTheme = 'Blue'
  }
  setHydrangeaData() {
    this.runTheme = 'Hydrangea'
  }
  setSakuraData() {
    this.runTheme = 'Sakura'
  }
  setLavenderData() {
    this.runTheme = 'Lavender'
  }
  setMediterraneanData() {
    this.runTheme = 'Mediterranean'
  }
  setIndustrialData() {
    this.runTheme = 'Industrial'
  }
  setMinimalistData() {
    this.runTheme = 'Minimalist'
  }
  setBohemianData() {
    this.runTheme = 'Bohemian'
  }
  setForestData() {
    this.runTheme = 'Forest'
  }
  setBeachData() {
    this.runTheme = 'Beach'
  }
  setSeaData() {
    this.runTheme = 'Sea'
  }
  setSpringData() {
    this.runTheme = 'Spring'
  }
  setWinterData() {
    this.runTheme = 'Winter'
  }
  setSummerData() {
    this.runTheme = 'Summer'
  }
  setAutumnData() {
    this.runTheme = 'Autumn'
  }

}
