import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Location, ResponseHandlerService } from './../../shared';


@Injectable()
export class LocationService {

  private baseUrl = 'http://localhost:3000/locations';


  constructor(public http: Http, @Inject(forwardRef(() => ResponseHandlerService)) private handler: ResponseHandlerService) {}
  
  getLocations(): Observable<Location[]> {
    return this.http.get(this.baseUrl)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }
  
  getLocation(id: number) {
    return this.http.get(this.baseUrl + '/' + id)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }
  
  updateLocation(location: Location): Observable<Location> {
    let body = JSON.stringify(location);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.baseUrl + '/' + location.id, body, options)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }

}
