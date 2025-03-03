import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';


import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../services/auth.interceptor';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule
    , MatIconModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //private _autofill = inject(AutofillMonitor);

  myForm: FormGroup;

  register: boolean = false;
  login: boolean = false

  isLogin = false

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]],

      name: [''],
      role: ['student']
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);

      if (this.register) {
        const { name, email, password, role } = this.myForm.value;
        this.userService.register(name, email, password, role).subscribe(
          response => {
            console.log('register successful', response);
            this.userService.login(email, password).subscribe(
              response => {
                console.log('Login successful', response);
                localStorage.setItem('token', response.token)
                localStorage.setItem('userId', response.userId)
                this.isLogin = true
              },
              error => {
                console.error('Login failed', error);
              }
            );
            localStorage.setItem('token', response.token)
          },
          error => {
            console.error('register failed', error);
          })
      }
      if (this.login) {
        const { email, password } = this.myForm.value;
        this.userService.login(email, password).subscribe(
          response => {
            console.log('Login successful', response);
            localStorage.setItem('token', response.token)
            localStorage.setItem('userId', response.userId)
            this.isLogin = true
          },
          error => {
            console.error('Login failed', error);
          }
        );
      }

    } else {
      throw console.error('the file is not valid');
    }
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  registerFunc() {
    this.register = true
    this.login = false
  }

  loginFunc() {
    this.login = true
    this.register = false
  }

}
// function inject(AutofillMonitor: typeof AutofillMonitor) {
//   throw new Error('Function not implemented.');
// }


// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../../services/user.service';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   standalone: true,
//   imports: [
//     MatTabsModule,
//     MatCardModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     ReactiveFormsModule,
//   ],
// })
// export class LoginComponent {
//   selectedTabIndex = 0;
//   loginForm: FormGroup;
//   registerForm: FormGroup;

//   constructor(private fb: FormBuilder, private userService: UserService) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });

//     this.registerForm = this.fb.group({
//       username: ['', [Validators.required, Validators.minLength(3)]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }

//   onLogin() {
//     if (this.loginForm.valid) {
//       const { email, password } = this.loginForm.value;
//       this.userService.login(email, password).subscribe(
//         (response) => {
//           console.log('Login successful', response);
//         },
//         (error) => {
//           console.error('Login failed', error);
//         }
//       );
//     }
//   }

//   onRegister() {
//     if (this.registerForm.valid) {
//       const { username, email, password } = this.registerForm.value;
//       this.userService.register(username, email, password, "student").subscribe(
//         (response) => {
//           console.log('Registration successful', response);
//         },
//         (error) => {
//           console.error('Registration failed', error);
//         }
//       );
//     }
//   }
// }
