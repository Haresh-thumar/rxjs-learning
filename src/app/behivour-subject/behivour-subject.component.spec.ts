import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehivourSubjectComponent } from './behivour-subject.component';

describe('BehivourSubjectComponent', () => {
  let component: BehivourSubjectComponent;
  let fixture: ComponentFixture<BehivourSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehivourSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehivourSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
