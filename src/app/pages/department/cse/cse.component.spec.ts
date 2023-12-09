import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CseComponent } from './cse.component';

describe('CseComponent', () => {
  let component: CseComponent;
  let fixture: ComponentFixture<CseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
