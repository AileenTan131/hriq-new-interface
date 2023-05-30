import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';


@Directive({
  selector: '[appBgChangeImage]',
})

export class BgChangeImageDirective implements OnInit {
  @Input() imagesList = [];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    let imageIndex;
    let currentImage = localStorage.getItem('currentBgImage');

    if (!currentImage) { //if currentImage=null, will always be null on load
      imageIndex = 0;
      localStorage.setItem('currentBgImage', this.imagesList[imageIndex]);//currentBgImage set as imageList[ ]
    }

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-image', `url(assets/bg/${currentImage}`
    );

    currentImage =
      this.imagesList[this.imagesList.indexOf(currentImage) + 1] || this.imagesList[0]; //sets imageIndex + 1 and loops it back to [0] once lastimage is reached.

    localStorage.setItem('currentBgImage', currentImage);
  }
}
