import { TestBed } from '@angular/core/testing';

import { AfterLoginActionsService } from './after-login-actions.service';

describe('AfterLoginActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfterLoginActionsService = TestBed.get(AfterLoginActionsService);
    expect(service).toBeTruthy();
  });
});
