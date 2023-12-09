import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandotoryDiscloreComponent } from './mandotory-disclore.component';

describe('MandotoryDiscloreComponent', () => {
  let component: MandotoryDiscloreComponent;
  let fixture: ComponentFixture<MandotoryDiscloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandotoryDiscloreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MandotoryDiscloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
