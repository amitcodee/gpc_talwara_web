import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardComponent } from './notice-board.component';

describe('NoticeBoardComponent', () => {
  let component: NoticeBoardComponent;
  let fixture: ComponentFixture<NoticeBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
