import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TimeService } from './time.service';

describe('Time Service', () => {
  beforeEachProviders(() => [TimeService]);

  it('should ...',
      inject([TimeService], (service: TimeService) => {
    expect(service).toBeTruthy();
  }));
});
