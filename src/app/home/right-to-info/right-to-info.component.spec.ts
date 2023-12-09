import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightToInfoComponent } from './right-to-info.component';

describe('RightToInfoComponent', () => {
  let component: RightToInfoComponent;
  let fixture: ComponentFixture<RightToInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightToInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightToInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
