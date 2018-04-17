import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
	selector: 'businesses',
	templateUrl: './businesses.component.html',
	styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent {
  constructor(private webService: WebService) { }

  ngOnInit() {
    if (sessionStorage.start) {
      this.start = sessionStorage.start;
    }
    this.webService.getBusinesses(this.start);
  }
  nextPage() {
    this.start = Number(this.start) + 5;
    sessionStorage.start = Number(this.start);
    this.webService.getBusinesses(this.start);
  }
  previousPage() {
    if (this.start > 0) {
      this.start = Number(this.start) - 5;
      sessionStorage.start = Number(this.start);
      this.webService.getBusinesses(this.start);
    }
  }
  start = 0;
  business_list;
}
