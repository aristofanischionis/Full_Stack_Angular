import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class WebService {
  businessID;
  private businesses_private_list = [];
  private businessesSubject = new Subject();
  businesses_list = this.businessesSubject.asObservable();

  private business_private_list = [];
  private businessSubject = new Subject();
  business = this.businessSubject.asObservable();

  private reviews_private_list  = [];
  private reviewsSubject = new Subject();
  reviews = this.reviewsSubject.asObservable();

  constructor(private http : Http) { };

  getBusinesses(start){
    return this.http.get(
      'http://localhost:3000/api/businesses?number=5&start='+start)
      .subscribe(response => {
        this.businesses_private_list = response.json();
        this.businessesSubject.next(this.businesses_private_list);
      });
  }

  getBusiness(id){
    return this.http.get('http://localhost:3000/api/businesses'+id)
    .subscribe(response => {
      this.business_private_list = response.json();
      this.businessSubject.next(this.business_private_list);
      this.businessID = id;
    });
  }

  getReviews(id) {
    return this.http.get(
      'http://localhost:3000/api/businesses/' + id + '/reviews')
      .subscribe(response => {
        this.reviews_private_list = response.json();
        this.reviewsSubject.next(this.reviews_private_list);
      })
    }

    postReview(review) {
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('username', review.name);
      urlSearchParams.append('text', review.review);
      urlSearchParams.append('stars', review.stars);
      this.http.post("http://localhost:3000/api/businesses/" +
        review.businessID + "/reviews", urlSearchParams)
          .subscribe(response => {
            this.getReviews(review.businessID);
          })
      }
}
