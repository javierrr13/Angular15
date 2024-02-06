import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuComponenteComponent } from './tu-componente.component';

describe('TuComponenteComponent', () => {
  let component: TuComponenteComponent;
  let fixture: ComponentFixture<TuComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
