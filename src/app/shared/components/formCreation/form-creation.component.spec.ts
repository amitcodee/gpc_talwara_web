import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreationComponent } from './form-creation.component';

describe('EditDetaislComponent', () => {
  let component: FormCreationComponent;
  let fixture: ComponentFixture<FormCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
