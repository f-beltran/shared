import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosColegioComponent } from './datos-colegio.component';

describe('DatosColegioComponent', () => {
  let component: DatosColegioComponent;
  let fixture: ComponentFixture<DatosColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosColegioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
