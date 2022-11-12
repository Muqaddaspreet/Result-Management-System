import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResultListComponent } from './show-result-list.component';

describe('ShowResultListComponent', () => {
  let component: ShowResultListComponent;
  let fixture: ComponentFixture<ShowResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowResultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
