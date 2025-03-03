import { Component } from '@angular/core';
import { LessonsService } from '../../services/lessons.service';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-lessons-managment',
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule ],
  templateUrl: './lessons-managment.component.html',
  styleUrl: './lessons-managment.component.css'
})
export class LessonsManagmentComponent {
  lessonForm: FormGroup;

  isCreate = false
  isUpdate = false
  isDelete = false

  isSuccedded = false
  
  title: string = ''
  content: string = ''
  courseId: number = 0

  courseIdD: number = 0
  lessonId: number = 0

  constructor(private fb: FormBuilder, private lessonsService: LessonsService) {
    this.lessonForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      courseId: ['', [Validators.required, Validators.min(1)]],
      lessonId: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  isCreateF(){
    this.isCreate = true
    this.isUpdate = false
    this.isDelete = false
  }

  isUpdateF(){
    this.isUpdate = true
    this.isCreate = false
    this.isDelete = false
  }

  isDeleteF(){
    this.isDelete = true
    this.isUpdate = false
    this.isCreate = false
  }

  createNewLesson() {

    this.lessonsService.createLesson(this.courseId, this.title, this.content)
      .subscribe(response => {
        console.log('Lesson created successfully:', response);
        this.isSuccedded = true
      }, error => {
        console.error('Error creating lesson:', error);
      });
  }

  updateLesson() {
    if (this.lessonForm.valid) {
      const { courseId,lessonId, title, content } = this.lessonForm.value;
      this.lessonsService.updateLesson(courseId, lessonId, { title, content, courseId })
        .subscribe(response => {
          console.log(response);
          this.isSuccedded = true
          // כאן תוכל להוסיף קוד לעדכון הממשק או הודעה למשתמש
        }, error => {
          console.error('Error updating lesson:', error);
          // כאן תוכל להוסיף טיפול בשגיאות
        });
    } else {
      console.log('Form is invalid');
    }
  }

  deleteLesson(): void {
    this.lessonsService.deleteLesson(this.courseId, this.lessonId).subscribe(
      response => {
        console.log('Lesson deleted successfully', response);
        this.isSuccedded = true
        // כאן תוכל להוסיף לוגיקה נוספת, כגון רענון רשימת השיעורים
      },
      error => {
        console.error('Error deleting lesson', error);
      }
    );
  }
}
