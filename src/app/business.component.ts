import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'business',
	templateUrl: './business.component.html',
	styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  reviewForm;
  review = {
    businessID: '',
    name: '',
    review: '',
    stars: 5
  }
  constructor(private webService: WebService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {

  this.reviewForm = formBuilder.group(
    {name: ['', Validators.required],
    review: ['', Validators.required],
    stars: 5 });
  };

  async ngOnInit() {
    this.webService.getBusiness(this.route.snapshot.params.id);
    this.webService.getReviews(this.route.snapshot.params.id);
  }

  onSubmit() {
    this.review.businessID = this.webService.businessID;
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
