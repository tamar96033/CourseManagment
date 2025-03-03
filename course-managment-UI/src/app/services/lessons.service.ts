import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  
  constructor(private http: HttpClient) { }

  getLessons(courseId: string): Observable<any> {
    const token = localStorage.getItem('token');

    const url = `http://localhost:3000/api/courses/${courseId}/lessons`; // Construct the URL
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Set the Authorization header
    });

    return this.http.get(url, { headers }); // Make the GET request
  }

  
  createLesson(courseId: number, title: string, content: string): Observable<any> {
    const token = localStorage.getItem('token')
    const url = `http://localhost:3000/api/courses/${courseId}/lessons`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const lessonData = {
      title: title,
      content: content,
      courseId: courseId
    };

    return this.http.post(url, lessonData, { headers });
  }

  updateLesson(courseId: number, lessonId: number, lessonData: any): Observable<any> {

    const token = localStorage.getItem('token') 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.put(`http://localhost:3000/api/courses/${courseId}/lessons/${lessonId}`, lessonData, { headers });
  }

  deleteLesson(courseId: number, lessonId: number): Observable<any> {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete(`http://localhost:3000/api/courses/${courseId}/lessons/${lessonId}`, { headers });
  }
}
