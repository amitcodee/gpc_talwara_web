import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraningPlacementCellComponent } from './traning-placement-cell.component';

describe('TraningPlacementCellComponent', () => {
  let component: TraningPlacementCellComponent;
  let fixture: ComponentFixture<TraningPlacementCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraningPlacementCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraningPlacementCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
