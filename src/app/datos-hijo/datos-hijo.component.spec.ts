import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosHijoComponent } from './datos-hijo.component';

describe('DatosHijoComponent', () => {
  let component: DatosHijoComponent;
  let fixture: ComponentFixture<DatosHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
