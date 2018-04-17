import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class WebService {

  private business_private_list = [];
  private businessesSubject = new Subject();
  business_list = this.businessesSubject.asObservable();

  constructor(private http : Http) { };

  getBusinesses(start){
    return this.http.get(
      'http://localhost:3000/api/businesses?start='+start)
      .subscribe(response => {
        this.business_private_list = response.json();
        this.businessesSubject.next(this.business_private_list);
      });
  }

  getBusiness(id){
    return this.http.get('http://localhost:3000/api/businesses'+id).toPromise();
  }

}
