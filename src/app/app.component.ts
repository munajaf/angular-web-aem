import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TokenService } from './shared/services/token.service';
import { AuthStateService } from './shared/services/auth-state.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isSignedIn!: boolean;
  title = 'AEM FRONTEND';
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService
  ) {}
  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
}
