import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonDetaljiComponent } from './telefon-detalji.component';

describe('TelefonDetaljiComponent', () => {
  let component: TelefonDetaljiComponent;
  let fixture: ComponentFixture<TelefonDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonDetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
