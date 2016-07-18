import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AppState } from './app-state.service';

describe('AppState Service', () => {
  beforeEachProviders(() => [AppState]);

  it('should ...',
      inject([AppState], (service: AppState) => {
    expect(service).toBeTruthy();
  }));
});
