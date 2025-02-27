import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPerStudComponent } from './courses-per-stud.component';

describe('CoursesPerStudComponent', () => {
  let component: CoursesPerStudComponent;
  let fixture: ComponentFixture<CoursesPerStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesPerStudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesPerStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
