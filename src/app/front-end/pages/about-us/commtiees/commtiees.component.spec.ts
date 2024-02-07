import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommtieesComponent } from './commtiees.component';
import { LanguageService } from '../../../services/language/language.service';
describe('CommtieesComponent', () => {
  let component: CommtieesComponent;
  let fixture: ComponentFixture<CommtieesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommtieesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommtieesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
