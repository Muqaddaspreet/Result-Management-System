import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCornerComponent } from './teacher-corner.component';

describe('TeacherCornerComponent', () => {
  let component: TeacherCornerComponent;
  let fixture: ComponentFixture<TeacherCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
