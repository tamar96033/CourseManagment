import { Component, Input } from '@angular/core';
import { LessonsService } from '../../services/lessons.service';
import { LessonsManagmentComponent } from "../lessons-managment/lessons-managment.component";

@Component({
  selector: 'app-show-lessons',
  imports: [LessonsManagmentComponent],
  templateUrl: './show-lessons.component.html',
  styleUrl: './show-lessons.component.css'
})
export class ShowLessonsComponent {
  @Input() courseId: string = ''; 
  lessons: any[] = [];
  token: string | null = localStorage.getItem('token');

  constructor(private lessonService: LessonsService) { }

  ngOnInit() {
    if (this.courseId) {
      this.lessonService.getLessons(this.courseId).subscribe(
        data => {
          this.lessons = data;
        },
        error => {
          console.error('Error fetching lessons:', error);
        }
      );
    }
  }
}
