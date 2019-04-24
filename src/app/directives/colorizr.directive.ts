import { Directive, ElementRef, Renderer2 } from '@angular/core';

//decorator 
@Directive({
  selector: '[appColorizr]'
})
export class ColorizrDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    console.log("Inside Constructor");
    console.log(this.elementRef.nativeElement);

    //JS way
    //this.elementRef.nativeElement.style.backgroundColor = 'red';

    this.renderer.setStyle(
      this.elementRef.nativeElement, 
      'background-color',
      'red'
    );

    //playaround with rendere api's to create more elements
  }

}
