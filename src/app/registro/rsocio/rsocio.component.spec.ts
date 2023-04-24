import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsocioComponent } from './rsocio.component';

describe('RsocioComponent', () => {
  let component: RsocioComponent;
  let fixture: ComponentFixture<RsocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
