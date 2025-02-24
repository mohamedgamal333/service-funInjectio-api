import { Directive, ElementRef } from '@angular/core';

@Directive({


  selector: '[appHighlight]' // selector name is appHighlight which is used in html file to apply the directive (homecomponent.html)
})
export class HighlightDirective {
// to make the directive do something, we need to add a property to the directive class.
// In this case, we'll add a constructor that sets the background color of the element to yellow.
  constructor(private el:ElementRef) {
    console.log('highlight directive called');
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.color = 'red';

  }

}
