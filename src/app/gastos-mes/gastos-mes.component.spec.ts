import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosMesComponent } from './gastos-mes.component';

describe('GastosMesComponent', () => {
  let component: GastosMesComponent;
  let fixture: ComponentFixture<GastosMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosMesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
