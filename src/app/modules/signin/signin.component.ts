import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import { TokenService } from '../../shared/services/token.service';
import { AuthStateService } from '../../shared/services/auth-state.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;
  invalid: boolean = false;
  errors: string = '';
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.email, Validators.required] ],
      password: [],
    });
  }
  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.invalid) this.invalid = true;
    if (this.loginForm.valid){
      if (this.invalid) this.invalid = false;
      this.loading = true;

      this.authService.signin(this.loginForm.value).subscribe(
        (result) => {
          this.token.setToken(result);
          this.errors = '';
        },
        (error) => {
          this.loading = false;
          if (error.status == 401) {
            return this.errors = 'Invalid Username or Password';
          }
          return this.errors = 'Service Unavailable';
        },
        () => {
          this.authState.setAuthState(true);

          this.loginForm.reset();
          this.router.navigate(['dashboard']);

          this.loading = false;
          this.errors = '';
        }
      );
    }
  }
  // Handle response
  responseHandler(data:any) {

  }
}
