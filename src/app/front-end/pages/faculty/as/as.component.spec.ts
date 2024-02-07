import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsComponent } from './as.component';

describe('AsComponent', () => {
  let component: AsComponent;
  let fixture: ComponentFixture<AsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
