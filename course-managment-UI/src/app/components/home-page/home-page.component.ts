import { Component, Input, ViewChild } from '@angular/core';
import { HomePageDetailsComponent } from '../home-page-details/home-page-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [HomePageDetailsComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  @ViewChild(HomePageDetailsComponent) childComponent!: HomePageDetailsComponent; 

  changeChildMessage() {
    this.childComponent.changeMessage('Message changed from Parent Component!'); 
  }

  
  today: number = Date.now(); 

}
