import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneralPosgradoComponent } from './informacion-general-posgrado.component';

describe('InformacionGeneralPosgradoComponent', () => {
  let component: InformacionGeneralPosgradoComponent;
  let fixture: ComponentFixture<InformacionGeneralPosgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionGeneralPosgradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionGeneralPosgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
