import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-all-courses',
  imports: [ MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule,
     RouterModule],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    const token = localStorage.getItem('token')
    this.courseService.getCourses(token!).subscribe((data) => {
      this.courses = data;
    });
  }
  // @Output() courseSelected = new EventEmitter<number>();
  // courses: any[] = []
  
  // isShowDetails = false

  // constructor(private courseService: CourseService) { }

  // ngOnInit() {
  //   const token = localStorage.getItem('token')
  //   console.log(token);
    
  //   this.courseService.getCourses(token!).subscribe(
  //     (data) => {
  //       this.courses = data;
  //       console.log(this.courses);
        
  //     },
  //     (error) => {
  //       console.error('Error fetching courses:', error);
  //     }
  //   );
  // }


  // showDetails(courseId: any){
  //   this.courseSelected.emit(courseId)
  //   this.isShowDetails = !this.isShowDetails
  // }

  
  // userId = localStorage.getItem('userId')


  // joinCourse(courseId: any) {
  //   console.log(this.userId);

  //   this.courseService.enrollStudent(courseId, this.userId as unknown as number).subscribe(
  //     response => {
  //       console.log('Successfully enrolled in the course:', response);
  //     },
  //     error => {
  //       console.error('Error enrolling in the course:', error);
  //     }
  //   );
  // }

  //there isnt suitable function in the server!!!
  // leaveCourse(courseId: any) {

  //   this.courseService.unenrollStudent(courseId, 1).subscribe(
  //     response => {
  //       console.log('Successfully unenrolled from the course:', response);
  //     },
  //     error => {
  //       console.error('Error unenrolling from the course:', error);
  //     }
  //   );
  // }
}