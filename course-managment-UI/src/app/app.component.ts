import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { LoginComponent } from "./components/login/login.component";
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [ MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-managment';
}
