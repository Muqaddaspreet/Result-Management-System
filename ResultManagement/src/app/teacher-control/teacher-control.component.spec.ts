import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherControlComponent } from './teacher-control.component';

describe('TeacherControlComponent', () => {
  let component: TeacherControlComponent;
  let fixture: ComponentFixture<TeacherControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
