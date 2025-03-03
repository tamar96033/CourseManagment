import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(token: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<any[]>('http://localhost:3000/api/courses', { headers });
  }
  
  createCourse(title: string, description: string, teacherId: number): Observable<any> {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Set the Authorization header
      'Content-Type': 'application/json', // Set the Content-Type header
    });

    const courseData = {
      title: title,
      description: description,
      teacherId: teacherId
    };

    return this.http.post<any>('http://localhost:3000/api/courses', courseData, { headers });
  }

  deleteCourse(courseId: string): Observable<void> {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete<void>(`http://localhost:3000/api/courses/${courseId}`, { headers });
  }

  updateCourse(courseId: string, courseData: { title: string; description: string; teacherId: number }): Observable<void> {
    const token = localStorage.getItem('token')

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<void>(`http://localhost:3000/api/courses/${courseId}`, courseData, { headers });
  }

  
  enrollStudent(courseId: number, userId: number): Observable<any> {
    const token = localStorage.getItem('token')

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`http://localhost:3000/api/courses/${courseId}/enroll`, { userId }, { headers });
  }

  unenrollStudent(courseId: number, userId: number): Observable<any> {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete(`http://localhost:3000/api/courses/${courseId}/unenroll`, {
      headers,
      body: { userId }
    });
  }


  
  getCourseById(courseId: string): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`http://localhost:3000/api/courses/${courseId}`, { headers });
  }
} 

