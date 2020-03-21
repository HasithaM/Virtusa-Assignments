import { TestBed } from '@angular/core/testing';

import { CardoorTokenService } from './cardoor-token.service';

describe('CardoorTokenService', () => {
  let service: CardoorTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardoorTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
