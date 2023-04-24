import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorbysComponent } from './vendedorbys.component';

describe('VendedorbysComponent', () => {
  let component: VendedorbysComponent;
  let fixture: ComponentFixture<VendedorbysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorbysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendedorbysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
