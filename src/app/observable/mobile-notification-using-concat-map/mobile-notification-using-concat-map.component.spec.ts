import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNotificationUsingConcatMapComponent } from './mobile-notification-using-concat-map.component';

describe('MobileNotificationUsingConcatMapComponent', () => {
  let component: MobileNotificationUsingConcatMapComponent;
  let fixture: ComponentFixture<MobileNotificationUsingConcatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNotificationUsingConcatMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNotificationUsingConcatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
