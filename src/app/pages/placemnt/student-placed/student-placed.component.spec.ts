import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPlacedComponent } from './student-placed.component';

describe('StudentPlacedComponent', () => {
  let component: StudentPlacedComponent;
  let fixture: ComponentFixture<StudentPlacedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPlacedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPlacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
