import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { DialogService } from './dialog.service';

describe('Dialog Service', () => {
  beforeEachProviders(() => [DialogService]);

  it('should ...',
      inject([DialogService], (service: DialogService) => {
    expect(service).toBeTruthy();
  }));
});
