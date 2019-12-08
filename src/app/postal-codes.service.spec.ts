import { TestBed } from '@angular/core/testing';

import { PostalCodesService } from './postal-codes.service';

describe('PostalCodesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostalCodesService = TestBed.get(PostalCodesService);
    expect(service).toBeTruthy();
  });
});
