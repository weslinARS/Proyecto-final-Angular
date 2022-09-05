import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroActComponent } from './form-registro-act.component';

describe('FormRegistroActComponent', () => {
  let component: FormRegistroActComponent;
  let fixture: ComponentFixture<FormRegistroActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistroActComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegistroActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
