import { ApolloQueryResult } from 'apollo-client';
import { Me } from './shared/types/me';

export interface StoreState {
  currentUser: ApolloQueryResult<Me> | null | any;
}
