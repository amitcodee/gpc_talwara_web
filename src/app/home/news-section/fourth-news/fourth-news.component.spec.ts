import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthNewsComponent } from './fourth-news.component';

describe('FourthNewsComponent', () => {
  let component: FourthNewsComponent;
  let fixture: ComponentFixture<FourthNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
