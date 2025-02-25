import { Directive, ElementRef, HostListener, input, Renderer2 } from '@angular/core';

@Directive({

// hint: why we make the directive ? As if we need to make logic that is used in multiple components(use it more than one place  ), we can make a directive and use it in multiple components.
  selector: '[appHighlight]' // selector name is appHighlight which is used in html file to apply the directive (homecomponent.html)
})
export class HighlightDirective {
// to make the directive do something, we need to add a property to the directive class.
// In this case, we'll add a constructor that sets the background color of the element to yellow.
// It's important to note that the constructor is called when the directive is instantiated, not when the element is added to the DOM.
  // constructor(private Renderer2: Renderer2) is better than ElementRef => this can treat the element
  // as a DOM element and can change the style of the element. renderer2 is a better way to change the style of the element.as it treat with the element as a DOM element.

  constructor(private el:ElementRef ,private renderer2: Renderer2) {
    console.log('highlight directive called');
    // (el.nativeElement as HTMLElement).style.backgroundColor = 'gray';
    (el.nativeElement as HTMLElement).style.color = this.color();
    (el.nativeElement as HTMLElement).style.display = 'flex';
    (el.nativeElement as HTMLElement).style.justifyContent = 'center';
    (el.nativeElement as HTMLElement).style.alignItems = 'center';
    (el.nativeElement as HTMLElement).style.direction = 'column';
    (el.nativeElement as HTMLElement).style.height = '60vh';
    (el.nativeElement as HTMLElement).style.width = '40vw';
    (el.nativeElement as HTMLElement).style.margin = 'auto';

// renderer2 is a better way to change the style of the element.as it treat with the element as a DOM element. better in security and compatibility.
  // so in all project i must use renderer2 to change the style of the element not elementRef.
renderer2.setStyle(el.nativeElement, 'background-color', this.bgColor());


}
// in this part we will add the logic of the directive. and add event listener to the element. to change the style of the element when the mouse enter or leave the element.
// we will use the HostListener decorator to add event listeners to the element.
@HostListener('mouseenter') onmouseenter() {
  this.renderer2.setStyle(this.el.nativeElement, 'background-color', 'yellow');
}
// we will use the HostListener decorator to remove event listeners from the element.
@HostListener('mouseleave') onmouseleave() {
  this.renderer2.setStyle(this.el.nativeElement, 'background-color', 'grey');
}


// we can use sgnal input to pass any thing in html file to the directive.

bgColor=input<string>('#fce4ec'); // default value of the input is #fce4ec
color = input<string>('tomato'); // default value of the input is green
}
