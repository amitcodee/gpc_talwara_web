import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceresComponent } from './grievanceres.component';

describe('GrievanceresComponent', () => {
  let component: GrievanceresComponent;
  let fixture: ComponentFixture<GrievanceresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrievanceresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrievanceresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
