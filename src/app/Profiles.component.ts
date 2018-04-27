import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService } from './auth/auth.service';

@Component({
	selector: 'Profiles',
	templateUrl: './Profiles.component.html',
	styleUrls: ['./Profiles.component.css']
})
export class ProfilesComponent {
  constructor(private webService: WebService,
              private authService: AuthService) { }

  ngOnInit() {
    if (sessionStorage.start) {
      this.start = sessionStorage.start;
    }
    this.webService.getProfiles(this.start);
  }
  nextPage() {
    this.start = Number(this.start) + 5;
    sessionStorage.start = Number(this.start);
    this.webService.getProfiles(this.start);
  }
  previousPage() {
    if (this.start > 0) {
      this.start = Number(this.start) - 5;
      sessionStorage.start = Number(this.start);
      this.webService.getProfiles(this.start);
    }
  }
  start = 0;
  Profile_list;
}
