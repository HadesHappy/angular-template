import { TestBed } from '@angular/core/testing';

import { UserdataserviceService } from './userdataservice.service';

describe('UserdataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserdataserviceService = TestBed.get(UserdataserviceService);
    expect(service).toBeTruthy();
  });
});
