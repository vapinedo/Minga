import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServprofesionalesComponent } from './servprofesionales.component';

describe('ServprofesionalesComponent', () => {
  let component: ServprofesionalesComponent;
  let fixture: ComponentFixture<ServprofesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServprofesionalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServprofesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
