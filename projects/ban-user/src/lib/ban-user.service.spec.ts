import { TestBed } from '@angular/core/testing';

import { BanUserService } from './ban-user.service';

describe('BanUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanUserService = TestBed.get(BanUserService);
    expect(service).toBeTruthy();
  });
});
