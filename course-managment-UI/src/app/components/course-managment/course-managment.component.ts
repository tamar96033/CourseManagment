import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-managment',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule
    , MatIconModule],
  templateUrl: './course-managment.component.html',
  styleUrl: './course-managment.component.css'
})
export class CourseManagmentComponent {

  myForm: FormGroup;
  isForbidden = false


  constructor(private fb: FormBuilder, private courseService: CourseService) {
    this.myForm = this.fb.group({
      id: [''],
      title: [''],
      content: ['']
    });
  }

  addFlag: boolean = false
  deleteFlag: boolean = false
  updateFlag: boolean = false

  addClick() {
    this.addFlag = true
    this.deleteFlag = false
    this.updateFlag = false
  }

  deleteClick() {
    this.deleteFlag = true
    this.addFlag = false
    this.updateFlag = false
  }

  updateClick() {
    this.updateFlag = true
    this.addFlag = false
    this.deleteFlag = false
  }

  onSubmitAdd() {
    console.log(this.myForm.value);
    const { title, content } = this.myForm.value

    this.courseService.createCourse(title, content, 1).subscribe(
      (data) => {
        console.log(data);

      },
      (error) => {
        console.error('Error fetching courses:', error);
        this.isForbidden = true
      })
  }

  onSubmitDelete() {
    this.courseService.deleteCourse('4').subscribe(
      (data) => {
        console.log(data);

      },
      (error) => {
        console.error('Error fetching courses:', error);
        this.isForbidden = true
      })

  }

  onSubmitUpdate() {
    const courseData = {
      // ...this.myForm.value.title,
      // ...this.myForm.value.content
      title: this.myForm.value.title,
      description: this.myForm.value.content,
      teacherId: 1
    }
    console.log(this.myForm.value.id);
    console.log(courseData);
    

    this.courseService.updateCourse(this.myForm.value.id, courseData).subscribe(
      (data) => {
        console.log(data);

      },
      (error) => {
        console.error('Error fetching courses:', error)
        this.isForbidden = true
      })

    // this.courseService.updateCourse('1', courseData).subscribe(
    //   (data) => {
    //     console.log(data);

    //   },
    //   (error) => {
    //     console.error('Error fetching courses:', error);
    //     this.isForbidden = true
    //   })
  }
}
