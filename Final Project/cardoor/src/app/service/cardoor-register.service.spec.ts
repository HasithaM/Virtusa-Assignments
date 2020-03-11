import { TestBed } from '@angular/core/testing';

import { CardoorRegisterService } from './cardoor-register.service';

describe('CardoorserviceService', () => {
  let service: CardoorRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardoorRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
