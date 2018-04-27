import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth/auth.service';

@Component({
	selector: 'Profile',
	templateUrl: './Profile.component.html',
	styleUrls: ['./Profile.component.css']
})
export class ProfileComponent {
  reviewForm;
  review = {
    ProfileID: '',
    name: '',
    review: '',
    stars: 5
  }
  constructor(private webService: WebService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private authService: AuthService) {

  this.reviewForm = formBuilder.group(
    {name: ['', Validators.required],
    review: ['', Validators.required],
    stars: 5 });
  };

  async ngOnInit() {
    this.webService.getProfile(this.route.snapshot.params.id);
    this.webService.getReviews(this.route.snapshot.params.id);
  }

  onSubmit() {
    this.review.ProfileID = this.webService.ProfileID;
    this.webService.postReview(this.review);
    this.reviewForm.reset();
  }

  isInvalid(control) {
    return this.reviewForm.controls[control].invalid &&
    this.reviewForm.controls[control].touched;
  }

  isIncomplete() {
    return this.isInvalid('name') ||
    this.isInvalid('review');
  }
}
