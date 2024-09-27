import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSingleComponent } from './clinic-single.component';

describe('ClinicSingleComponent', () => {
  let component: ClinicSingleComponent;
  let fixture: ComponentFixture<ClinicSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
