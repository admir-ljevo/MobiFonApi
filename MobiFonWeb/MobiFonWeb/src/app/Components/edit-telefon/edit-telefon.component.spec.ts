import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTelefonComponent } from './edit-telefon.component';

describe('EditTelefonComponent', () => {
  let component: EditTelefonComponent;
  let fixture: ComponentFixture<EditTelefonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTelefonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTelefonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
