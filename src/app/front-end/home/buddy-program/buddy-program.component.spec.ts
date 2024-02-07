import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyProgramComponent } from './buddy-program.component';

describe('BuddyProgramComponent', () => {
  let component: BuddyProgramComponent;
  let fixture: ComponentFixture<BuddyProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuddyProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuddyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
