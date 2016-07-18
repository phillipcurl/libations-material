import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Client, ResponseHandlerService } from './../../shared';

@Injectable()
export class ClientService {

  private baseUrl = 'http://localhost:3000/clients';


constructor(public http: Http, @Inject(forwardRef(() => ResponseHandlerService)) private handler: ResponseHandlerService) {}

getClients(): Observable<Client[]> {
    return this.http.get(this.baseUrl)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }
  
  getClient(id: number) {
    return this.http.get(this.baseUrl + '/' + id)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }
  
  updateClient(client: Client): Observable<Client> {
    let body = JSON.stringify(client);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.baseUrl + '/' + client.id, body, options)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }

}
