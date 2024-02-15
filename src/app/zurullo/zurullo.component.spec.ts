import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZurulloComponent } from './zurullo.component';

describe('ZurulloComponent', () => {
  let component: ZurulloComponent;
  let fixture: ComponentFixture<ZurulloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZurulloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZurulloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
