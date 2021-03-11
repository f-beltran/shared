import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosDeRegistroComponent } from './pasos-de-registro.component';

describe('PasosDeRegistroComponent', () => {
  let component: PasosDeRegistroComponent;
  let fixture: ComponentFixture<PasosDeRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasosDeRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasosDeRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
