import { TestBed } from '@angular/core/testing';

import { CardoorBookingPaymentService } from './cardoor-booking-payment.service';

describe('CardoorBookingPaymentService', () => {
  let service: CardoorBookingPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardoorBookingPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
