import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: []
})

export class NavComponent {
  constructor(private authService: AuthService) { }
}
