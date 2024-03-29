import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComponentsComponent } from './material-components.component';

describe('MaterialComponentsComponent', () => {
  let component: MaterialComponentsComponent;
  let fixture: ComponentFixture<MaterialComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
