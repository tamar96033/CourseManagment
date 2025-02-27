import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { AuthInterceptor } from '../../services/auth.interceptor';

@Component({
  selector: 'app-menu',
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  //providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
