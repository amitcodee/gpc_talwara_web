import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AicteApprovelComponent } from './aicte-approvel.component';

describe('AicteApprovelComponent', () => {
  let component: AicteApprovelComponent;
  let fixture: ComponentFixture<AicteApprovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AicteApprovelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AicteApprovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
