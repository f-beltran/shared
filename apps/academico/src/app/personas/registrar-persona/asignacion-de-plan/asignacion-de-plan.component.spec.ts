import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionDePlanComponent } from './asignacion-de-plan.component';

describe('AsignacionDePlanComponent', () => {
  let component: AsignacionDePlanComponent;
  let fixture: ComponentFixture<AsignacionDePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionDePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionDePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
