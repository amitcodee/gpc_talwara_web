import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaAccountComponent } from './social-media-account.component';

describe('SocialMediaAccountComponent', () => {
  let component: SocialMediaAccountComponent;
  let fixture: ComponentFixture<SocialMediaAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
