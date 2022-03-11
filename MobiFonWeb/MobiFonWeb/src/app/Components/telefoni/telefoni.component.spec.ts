import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoniComponent } from './telefoni.component';

describe('TelefoniComponent', () => {
  let component: TelefoniComponent;
  let fixture: ComponentFixture<TelefoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
