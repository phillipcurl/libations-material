import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Campaign, ResponseHandlerService } from './../../shared';

@Injectable()
export class CampaignService {
  
private baseUrl = 'http://localhost:3000/campaigns';


constructor(public http: Http, @Inject(forwardRef(() => ResponseHandlerService)) private handler: ResponseHandlerService) {}

getCampaigns(): Observable<Campaign[]> {
    return this.http.get(this.baseUrl)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }
  
  getCampaign(id: number) {
    return this.http.get(this.baseUrl + '/' + id)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }
  
  updateCampaign(campaign: Campaign): Observable<Campaign> {
    let body = JSON.stringify(campaign);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.baseUrl + '/' + campaign.id, body, options)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }

}
