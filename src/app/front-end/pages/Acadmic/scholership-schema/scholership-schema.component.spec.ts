import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholershipSchemaComponent } from './scholership-schema.component';

describe('ScholershipSchemaComponent', () => {
  let component: ScholershipSchemaComponent;
  let fixture: ComponentFixture<ScholershipSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholershipSchemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScholershipSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
