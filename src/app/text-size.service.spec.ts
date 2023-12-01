import { TestBed } from '@angular/core/testing';

import { TextSizeService } from './text-size.service';

describe('TextSizeService', () => {
  let service: TextSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
