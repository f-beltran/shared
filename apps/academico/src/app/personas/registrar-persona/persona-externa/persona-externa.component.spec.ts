import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaExternaComponent } from './persona-externa.component';

describe('PersonaExternaComponent', () => {
  let component: PersonaExternaComponent;
  let fixture: ComponentFixture<PersonaExternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaExternaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
