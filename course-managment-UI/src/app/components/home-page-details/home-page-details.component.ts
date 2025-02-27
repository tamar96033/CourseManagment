import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page-details',
  imports: [],
  templateUrl: './home-page-details.component.html',
  styleUrl: './home-page-details.component.css'
})
export class HomePageDetailsComponent {
  message: string = 'Hello from Child Component!';

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
