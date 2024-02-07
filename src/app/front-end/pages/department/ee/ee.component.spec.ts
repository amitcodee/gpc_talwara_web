import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeComponent } from './ee.component';

describe('EeComponent', () => {
  let component: EeComponent;
  let fixture: ComponentFixture<EeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
