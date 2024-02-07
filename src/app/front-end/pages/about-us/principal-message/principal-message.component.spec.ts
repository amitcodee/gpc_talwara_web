import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMessageComponent } from './principal-message.component';

describe('PrincipalMessageComponent', () => {
  let component: PrincipalMessageComponent;
  let fixture: ComponentFixture<PrincipalMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
