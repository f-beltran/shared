import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPadresComponent } from './datos-padres.component';

describe('DatosPadresComponent', () => {
  let component: DatosPadresComponent;
  let fixture: ComponentFixture<DatosPadresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPadresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
