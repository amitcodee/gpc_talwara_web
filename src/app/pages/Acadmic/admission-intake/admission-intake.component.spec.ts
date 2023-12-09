import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionIntakeComponent } from './admission-intake.component';

describe('AdmissionIntakeComponent', () => {
  let component: AdmissionIntakeComponent;
  let fixture: ComponentFixture<AdmissionIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionIntakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmissionIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
