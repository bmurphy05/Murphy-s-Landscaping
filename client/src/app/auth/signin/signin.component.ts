import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthStoreService } from '../auth-store.service';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit, OnDestroy {
  form: FormGroup;
  loading: boolean;
  isValidEmail: boolean;
  isValidPassword: boolean;
  dismissSnackbar: string;
  storeSub: Subscription;
  signinSub: Subscription;
  currentUser: any;

  constructor(
    private _auth: AuthStoreService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.dismissSnackbar = 'Dismiss';
  }

  ngOnInit(): void {
    this.loading = false;
    this.isValidEmail = true;
    this.isValidPassword = true;

    this.storeSub = this._auth.getCurrentUser()
      .subscribe(state => {
        if (state.data.me) {
          this.currentUser = state.data.me;
          this.router.navigate(['/dashboard']);
        }
      });

    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      })
    });

    this.form.get('email').statusChanges.subscribe(status => {
      this.isValidEmail = status === 'VALID';
    });

    this.form.get('password').statusChanges.subscribe(status => {
      this.isValidPassword = status === 'VALID';
    });
  }

  signin() {
    const signinData = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };

    this.loading = true;

    this.signinSub = this._auth.login(signinData.email, signinData.password)
      .subscribe(res => {
        if (res.data.login.errors) {
          this.openSnackBar(res.data.login.errors[0].message, this.dismissSnackbar);
          this.resetForm();
          this.loading = res.loading;
        } else {
          this.router.navigate(['dashboard']);
          this.openSnackBar(`Success! Welcome back ${res.data.login.success.user.fullName}!`, this.dismissSnackbar);
          this.resetForm();
          this.loading = res.loading;
        }
      });
  }

  resetForm() {
    this.form.reset();
    this.isValidEmail = true;
    this.isValidPassword = true;
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 5000
    });
  }

  onRegisterClick() {
    return this.router.navigate(['/register']);
  };

  onForgotPasswordClick() {
    return this.router.navigate(['/register']);
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
    if (this.signinSub) {
      this.signinSub.unsubscribe();
    }
  }
}
