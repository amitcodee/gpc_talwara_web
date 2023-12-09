import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionHelpdeskComponent } from './admission-helpdesk.component';

describe('AdmissionHelpdeskComponent', () => {
  let component: AdmissionHelpdeskComponent;
  let fixture: ComponentFixture<AdmissionHelpdeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionHelpdeskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmissionHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
