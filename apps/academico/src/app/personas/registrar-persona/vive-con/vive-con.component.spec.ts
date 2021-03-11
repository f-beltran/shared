import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViveConComponent } from './vive-con.component';

describe('ViveConComponent', () => {
  let component: ViveConComponent;
  let fixture: ComponentFixture<ViveConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViveConComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViveConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
