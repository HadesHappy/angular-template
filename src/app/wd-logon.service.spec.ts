import { TestBed } from '@angular/core/testing';

import { WdLogonService } from './wd-logon.service';

describe('WdLogonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WdLogonService = TestBed.get(WdLogonService);
    expect(service).toBeTruthy();
  });
});
