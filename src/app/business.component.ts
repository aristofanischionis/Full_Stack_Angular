import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'business',
	templateUrl: './business.component.html',
	styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  constructor(private webService: WebService, private route: ActivatedRoute) { };


  async ngOnInit() {
    var response = await this.webService.getBusiness(this.route.snapshot.params.id);
    this.business = response.json();
  }

  business = { };
}
