import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressClipsComponent } from './press-clips.component';

describe('PressClipsComponent', () => {
  let component: PressClipsComponent;
  let fixture: ComponentFixture<PressClipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressClipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
