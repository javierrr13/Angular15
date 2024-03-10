import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPadreComponent } from './dados-padre.component';

describe('DadosPadreComponent', () => {
  let component: DadosPadreComponent;
  let fixture: ComponentFixture<DadosPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
