import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-home-page',
  imports: [ CommonModule, HighlightDirective ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  // @ViewChild(HomePageDetailsComponent) childComponent!: HomePageDetailsComponent; 

  // changeChildMessage() {
  //   this.childComponent.changeMessage('Message changed from Parent Component!'); 
  // }

  
  today: number = Date.now(); 

}
