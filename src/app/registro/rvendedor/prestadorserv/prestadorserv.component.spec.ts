import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorservComponent } from './prestadorserv.component';

describe('PrestadorservComponent', () => {
  let component: PrestadorservComponent;
  let fixture: ComponentFixture<PrestadorservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadorservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestadorservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
