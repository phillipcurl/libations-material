import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Brand, ResponseHandlerService } from './../../shared';

@Injectable()
export class BrandService {
  
  private baseUrl = 'http://localhost:3000/brands';


  constructor(public http: Http, @Inject(forwardRef(() => ResponseHandlerService)) private handler: ResponseHandlerService) {}
  
  getBrands(): Observable<Brand[]> {
    return this.http.get(this.baseUrl)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }
  
  getBrand(id: number) {
    return this.http.get(this.baseUrl + '/' + id)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }
  
  updateBrand(brand: Brand): Observable<Brand> {
    let body = JSON.stringify(brand);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.baseUrl + '/' + brand.id, body, options)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }
  
}
