import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneralPregradoComponent } from './informacion-general-pregrado.component';

describe('InformacionGeneralPregradoComponent', () => {
  let component: InformacionGeneralPregradoComponent;
  let fixture: ComponentFixture<InformacionGeneralPregradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionGeneralPregradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionGeneralPregradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
