import { TestBed } from '@angular/core/testing';

import { CardoorLoginService } from './cardoor-login.service';

describe('CardoorLoginService', () => {
  let service: CardoorLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardoorLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
