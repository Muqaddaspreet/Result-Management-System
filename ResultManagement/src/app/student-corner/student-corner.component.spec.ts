import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCornerComponent } from './student-corner.component';

describe('StudentCornerComponent', () => {
  let component: StudentCornerComponent;
  let fixture: ComponentFixture<StudentCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
