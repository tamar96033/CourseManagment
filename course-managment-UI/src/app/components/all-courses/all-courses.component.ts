import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../services/auth.interceptor';

@Component({
  selector: 'app-all-courses',
  imports: [],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {

  courses: any[] = []
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    //const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…4NzZ9.16QjmA4JnHnMk9dBMTeKbqZk_MvNTGrOrMFSKIrF4Vo';
    const token = localStorage.getItem('token')
    console.log(token);
    
    this.courseService.getCourses(token!).subscribe(
      (data) => {
        this.courses = data;
        console.log(this.courses);
        
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  registeringCourse(){
    
  }
}