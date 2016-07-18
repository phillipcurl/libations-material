import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ResponseHandlerService } from './response-handler.service';

describe('ResponseHandler Service', () => {
  beforeEachProviders(() => [ResponseHandlerService]);

  it('should ...',
      inject([ResponseHandlerService], (service: ResponseHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
