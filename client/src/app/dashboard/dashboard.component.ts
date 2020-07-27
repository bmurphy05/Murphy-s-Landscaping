import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApolloAngularSDK, User } from '../generated/graphql';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {
  userSub: Subscription;
  users: any[];

  constructor(
    private apolloSdk: ApolloAngularSDK
  ) { }

  ngOnInit(): void {
    this.userSub = this.apolloSdk.users()
      .subscribe(data => {
        console.log(data);
        this.users = data.data.users;
      });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
