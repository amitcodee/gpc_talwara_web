import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeComponent } from './ce.component';

describe('CeComponent', () => {
  let component: CeComponent;
  let fixture: ComponentFixture<CeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
