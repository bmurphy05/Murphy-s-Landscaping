import { Component, OnInit } from '@angular/core';
import { AuthStoreService } from './auth/auth-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private _auth: AuthStoreService
  ) { }

  ngOnInit() {
    this._auth.autoLogin();
  }
}
