import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [ CommonModule],
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
