import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvendedorComponent } from './rvendedor.component';

describe('RvendedorComponent', () => {
  let component: RvendedorComponent;
  let fixture: ComponentFixture<RvendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
