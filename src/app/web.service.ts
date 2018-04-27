import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class WebService {
  ProfileID;
  private Profiles_private_list = [];
  private ProfilesSubject = new Subject();
  Profiles_list = this.ProfilesSubject.asObservable();

  private Profile_private_list = [];
  private ProfileSubject = new Subject();
  Profile = this.ProfileSubject.asObservable();

  private reviews_private_list  = [];
  private reviewsSubject = new Subject();
  reviews = this.reviewsSubject.asObservable();

  constructor(private http: Http) { }

  getProfiles(start) {
    return this.http.get(
      'http://localhost:3000/api/Profiles?number=5&start=' + start)
      .subscribe(response => {
        this.Profiles_private_list = response.json();
        this.ProfilesSubject.next(this.Profiles_private_list);
      });
  }

  getProfile(id){
    return this.http.get('http://localhost:3000/api/Profiles' + id)
    .subscribe(response => {
      this.Profile_private_list = response.json();
      this.ProfileSubject.next(this.Profile_private_list);
      this.ProfileID = id;
    });
  }

  getReviews(id) {
    return this.http.get(
      'http://localhost:3000/api/Profiles/' + id + '/reviews')
      .subscribe(response => {
        this.reviews_private_list = response.json();
        this.reviewsSubject.next(this.reviews_private_list);
      });
    };

    postReview(review) {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('username', review.name);
      urlSearchParams.append('text', review.review);
      urlSearchParams.append('stars', review.stars);
      this.http.post("http://localhost:3000/api/Profiles/" +
        review.ProfileID + "/reviews", urlSearchParams)
          .subscribe(response => {
            this.getReviews(review.ProfileID);
          });
      }
}
