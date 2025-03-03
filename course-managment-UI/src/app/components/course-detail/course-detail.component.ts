import { Component, Input } from '@angular/core';
import { LessonsService } from '../../services/lessons.service';
import { Subscription } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';


// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-course-detail',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatCardModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {

  course: any;

  constructor(private route: ActivatedRoute, private courseService: CourseService, private lessonService: LessonsService) { }

  lessons: any[] = [];

  private courseIdSubscription: Subscription | null = null; // Initialized to null


  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    console.log(courseId);

    this.loadCourse(courseId!);


  }

  loadCourse(id: string) {
    this.courseService.getCourseById(id).subscribe((data) => {
      this.course = data;
      this.loadLessons(id);
    });

    console.log('you are in loadCourse');
  }

  loadLessons(courseId: string) {
    this.lessonService.getLessons(courseId).subscribe(
      (lessonsData) => {
        this.lessons = lessonsData; 
        console.log('Lessons loaded:', this.lessons);
      },
      (error) => {
        console.error('Error fetching lessons:', error);
      }
    );
  }


  userId = localStorage.getItem('userId')
  isJoined = false

  joinCourse(courseId: any) {
    console.log(this.userId);

    this.courseService.enrollStudent(courseId, this.userId as unknown as number).subscribe(
      response => {
        console.log('Successfully enrolled in the course:', response);
        this.isJoined = true
      },
      error => {
        console.error('Error enrolling in the course:', error);
      }
    );
  }

  isLeave = false

  leaveCourse(courseId: any){
    this.courseService.unenrollStudent(courseId, this.userId as unknown as number).subscribe(
      response => {
        console.log('Successfully enrolled in the course:', response);
        this.isLeave = true
      },
      error => {
        console.error('Error enrolling in the course:', error);
      }
    );
  }

  // @Input() courseId: any

  // lessons: any[] = [];

  // private courseIdSubscription: Subscription | null = null; // Initialized to null

  // constructor(private lessonService: LessonsService) {}

  // ngOnInit() {
  //   this.courseIdSubscription = this.courseId.subscribe((course: any) => { // Specify the type here
  //     console.log('Received courseId:', course);
  //     if (course && course.id) {
  //       const courseIdString = course.id; // Extract the id property
  //       this.lessonService.getLessons(courseIdString).subscribe(
  //         data => {
  //           this.lessons = data;
  //           console.log(this.lessons);

  //         },
  //         error => {
  //           console.error('Error fetching lessons:', error);
  //         }
  //       );
  //     }
  //   });
  // }

  // ngOnDestroy() {
  //   if (this.courseIdSubscription) {
  //     this.courseIdSubscription.unsubscribe(); // Clean up the subscription
  //   }
  // }

  // constructor(private lessonService: LessonsService) { }

  // ngOnInit() {
  //   console.log(this.courseId);

  //   if (this.courseId) {
  //     this.lessonService.getLessons(this.courseId?.id).subscribe(
  //       data => {
  //         this.lessons = data;
  //       },
  //       error => {
  //         console.error('Error fetching lessons:', error);
  //       }
  //     );
  //   }
  // }
}
