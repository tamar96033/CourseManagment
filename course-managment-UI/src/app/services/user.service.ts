import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    };

    return this.http.post<any>('http://localhost:3000/api/auth/login', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  register(name: string, email: string, password: string, role: string): Observable<any> {
    const body = {
      name: name,
      email: email,
      password: password,
      role: role
    }
    return this.http.post<any>('http://localhost:3000/api/auth/register', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  

}
