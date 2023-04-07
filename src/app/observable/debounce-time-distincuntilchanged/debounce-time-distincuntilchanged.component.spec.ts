import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTimeDistincuntilchangedComponent } from './debounce-time-distincuntilchanged.component';

describe('DebounceTimeDistincuntilchangedComponent', () => {
  let component: DebounceTimeDistincuntilchangedComponent;
  let fixture: ComponentFixture<DebounceTimeDistincuntilchangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceTimeDistincuntilchangedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceTimeDistincuntilchangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
