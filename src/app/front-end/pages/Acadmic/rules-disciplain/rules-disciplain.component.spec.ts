import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesDisciplainComponent } from './rules-disciplain.component';

describe('RulesDisciplainComponent', () => {
  let component: RulesDisciplainComponent;
  let fixture: ComponentFixture<RulesDisciplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesDisciplainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RulesDisciplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
