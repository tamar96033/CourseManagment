import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagmentComponent } from './course-managment.component';

describe('CourseManagmentComponent', () => {
  let component: CourseManagmentComponent;
  let fixture: ComponentFixture<CourseManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
