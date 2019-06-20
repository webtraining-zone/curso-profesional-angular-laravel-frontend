import { TestBed } from '@angular/core/testing';

import { ToggleModalService } from './toggle-modal.service';

describe('ToggleModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToggleModalService = TestBed.get(ToggleModalService);
    expect(service).toBeTruthy();
  });
});
