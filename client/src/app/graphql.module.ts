import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

// const uri = 'https://draftshark-api.herokuapp.com/'; UAT
const uri = 'http://127.0.0.1:4000/graphql'; // DEV
// const uri = 'http://localhost:3000'; DOCKER

@NgModule({
  exports: [ApolloModule, HttpLinkModule]
})
export class GraphQLModule {
  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink
  ) {

    const basic = setContext((operation, context) => ({
      headers: {
        Accept: 'charset=utf-8'
      }
    }));

    const link = ApolloLink.from([basic, this.httpLink.create({
      uri,
      withCredentials: true
    })]);
    const cache = new InMemoryCache();

    this.apollo.create({ link, cache });
  }

  setUp() { }
}
