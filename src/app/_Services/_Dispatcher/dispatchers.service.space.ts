import { TestBed } from '@angular/core/testing';

import {DispatcherService}  from './dispatchers.service';

describe('DispatcherService', () => {
  let service: DispatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});