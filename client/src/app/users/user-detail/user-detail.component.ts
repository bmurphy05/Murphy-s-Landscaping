import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApolloAngularSDK, UserInput } from '../../generated/graphql';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  userSub: Subscription;
  id: string;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private apolloSdk: ApolloAngularSDK
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];

        const input: UserInput = {
          id: this.id
        };

        this.userSub = this.apolloSdk.user({ data: input })
          .subscribe(data => {
            console.log(data);
            this.user = data.data.user;
          });
      });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
