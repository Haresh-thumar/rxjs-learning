import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo3Component } from './compo3.component';

describe('Compo3Component', () => {
  let component: Compo3Component;
  let fixture: ComponentFixture<Compo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
