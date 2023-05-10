import { ColorSchemesService } from "./color-schemes.service";

export const colorFilter = [
  runTheme: any;

  blue-filter04: runTheme === 'Blue',
  green-filter04: runTheme === 'Green',
  red-filter04: runTheme === 'Red',
  hydrangea-filter04: runTheme === 'Hydrangea',
  sakura-filter04: runTheme === 'Sakura',
  lavender-filter04: runTheme === 'Lavender',
  mediterranean-filter04: runTheme === 'Mediterranean',
  industrial-filter04: runTheme === 'Industrial',
  minimalist-filter04: runTheme === 'Minimalist',
  bohemian-filter04: runTheme === 'Bohemian',
  forest-filter04: runTheme === 'Forest',
  beach-filter04: runTheme === 'Beach',
  sea-filter04: runTheme === 'Sea',
  spring-filter04: runTheme === 'Spring',
  winter-filter04: runTheme === 'Winter',
  summer-filter04: runTheme === 'Summer',
  autumn-filter04: runTheme === 'Autumn'

constructor(
  private colorSchemes: ColorSchemesService,
) {
  this.colorSchemes.data$.subscribe(data => {
    this.runTheme = data;
  })
}
]


