import { TestBed } from '@angular/core/testing';

import { CardoorAuthGuardService } from './cardoor-auth-guard.service';

describe('AuthGuardService', () => {
  let service: CardoorAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardoorAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
