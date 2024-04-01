import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStudentsDashComponent } from './main-students-dash.component';

describe('MainStudentsDashComponent', () => {
  let component: MainStudentsDashComponent;
  let fixture: ComponentFixture<MainStudentsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainStudentsDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainStudentsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
