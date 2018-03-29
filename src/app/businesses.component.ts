import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
	selector: 'businesses',
	templateUrl: './businesses.component.html',
	styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent {
  constructor(private webService: WebService) { };
  async ngOnInit() {
    var response = await this.webService.getBusinesses();
    this.business_list = response.json();
  }
  business_list = [
  ];
}
