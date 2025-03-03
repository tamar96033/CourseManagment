import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { CourseManagmentComponent } from './components/course-managment/course-managment.component';
import { LessonsManagmentComponent } from './components/lessons-managment/lessons-managment.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'all-courses', component: AllCoursesComponent},
    {path: 'course-managment', component: CourseManagmentComponent},
    {path: 'lessons-managment', component: LessonsManagmentComponent},
    { path: 'courses/:id', component: CourseDetailComponent }
];

