import { TestBed } from '@angular/core/testing';

import { SpringSecirutyIntercepterService } from './spring-seciruty-intercepter.service';

describe('SpringSecirutyIntercepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringSecirutyIntercepterService = TestBed.get(SpringSecirutyIntercepterService);
    expect(service).toBeTruthy();
  });
});
