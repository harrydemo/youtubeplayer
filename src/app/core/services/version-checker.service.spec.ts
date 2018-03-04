import { TestBed, inject } from '@angular/core/testing';

import { VersionCheckerService } from './version-checker.service';

describe('VersionCheckerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VersionCheckerService]
    });
  });

  it('should be created', inject([VersionCheckerService], (service: VersionCheckerService) => {
    expect(service).toBeTruthy();
  }));
});
