import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CampaignService } from './campaign.service';

describe('Campaign Service', () => {
  beforeEachProviders(() => [CampaignService]);

  it('should ...',
      inject([CampaignService], (service: CampaignService) => {
    expect(service).toBeTruthy();
  }));
});
