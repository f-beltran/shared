import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosSaludComponent } from './datos-salud.component';

describe('DatosSaludComponent', () => {
  let component: DatosSaludComponent;
  let fixture: ComponentFixture<DatosSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosSaludComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
