import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-about',
  imports: [HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
