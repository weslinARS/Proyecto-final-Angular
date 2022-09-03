import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosMesComponent } from './ingresos-mes.component';

describe('IngresosMesComponent', () => {
  let component: IngresosMesComponent;
  let fixture: ComponentFixture<IngresosMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosMesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresosMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
