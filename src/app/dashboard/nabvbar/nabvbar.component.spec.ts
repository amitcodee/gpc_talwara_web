import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvbarComponent } from './nabvbar.component';

describe('NabvbarComponent', () => {
  let component: NabvbarComponent;
  let fixture: ComponentFixture<NabvbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NabvbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NabvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
