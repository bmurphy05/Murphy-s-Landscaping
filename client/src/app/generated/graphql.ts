import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from 'apollo-client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};



export type Address = {
  __typename?: 'Address';
  id: Scalars['String'];
  user: User;
  street: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  address?: Maybe<Array<Address>>;
  role: Scalars['String'];
  confirmed: Scalars['Boolean'];
  tokenVersion: Scalars['Float'];
  forgotPasswordLock: Scalars['Boolean'];
  creationTime: Scalars['DateTime'];
};


export type Job = {
  __typename?: 'Job';
  id: Scalars['String'];
  customer: User;
  employee?: Maybe<User>;
  isComplete: Scalars['Boolean'];
  isPaid: Scalars['Boolean'];
  dateRequested: Scalars['DateTime'];
  dateCompleted: Scalars['DateTime'];
  cost: Scalars['Float'];
  datePaid: Scalars['DateTime'];
  jobType: Scalars['String'];
  expenses?: Maybe<Array<Expense>>;
};

export type Expense = {
  __typename?: 'Expense';
  id: Scalars['String'];
  cost: Scalars['Float'];
  job: Job;
  expenseType: Scalars['String'];
};

export type Response = {
  __typename?: 'Response';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type Result = {
  __typename?: 'Result';
  success?: Maybe<Array<Response>>;
  errors?: Maybe<Array<Response>>;
};

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  user?: Maybe<User>;
  accessToken: Scalars['String'];
  expiresIn: Scalars['Float'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  success?: Maybe<LoginSuccess>;
  errors?: Maybe<Array<Response>>;
};

export type AddressInput = {
  user: Scalars['String'];
  street: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['Float'];
};

export type ExpenseInput = {
  cost: Scalars['Float'];
  job: Scalars['String'];
  expenseType: Scalars['String'];
};

export type JobInput = {
  customer: Scalars['String'];
  employee: Scalars['String'];
  cost: Scalars['Float'];
  jobType: Scalars['String'];
};

export type ChangePasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  role: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  addresses: Array<Address>;
  address: Address;
  expenses: Array<Expense>;
  expense: Expense;
  jobs: Array<Job>;
  jobsByCustomer: Array<Job>;
  job: Job;
  me?: Maybe<User>;
  users: Array<User>;
  user: User;
};


export type QueryAddressArgs = {
  id: Scalars['String'];
};


export type QueryExpenseArgs = {
  id: Scalars['String'];
};


export type QueryJobArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: Result;
  deleteAddress: Result;
  createExpense: Result;
  deleteExpense: Result;
  createJob: Result;
  deleteJob: Result;
  register: Result;
  login?: Maybe<LoginResult>;
  confirmUser: Result;
  forgotPassword: Result;
  changePassword: Result;
  logout: Scalars['Boolean'];
  deleteUser: Result;
};


export type MutationCreateAddressArgs = {
  input: AddressInput;
};


export type MutationDeleteAddressArgs = {
  id: Scalars['String'];
};


export type MutationCreateExpenseArgs = {
  input: ExpenseInput;
};


export type MutationDeleteExpenseArgs = {
  id: Scalars['String'];
};


export type MutationCreateJobArgs = {
  input: JobInput;
};


export type MutationDeleteJobArgs = {
  id: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type CreateAddressMutationVariables = Exact<{
  data: AddressInput;
}>;


export type CreateAddressMutation = (
  { __typename?: 'Mutation' }
  & { createAddress: (
    { __typename?: 'Result' }
    & { success?: Maybe<Array<(
      { __typename?: 'Response' }
      & Pick<Response, 'path' | 'message'>
    )>>, errors?: Maybe<Array<(
      { __typename?: 'Response' }
      & Pick<Response, 'path' | 'message'>
    )>> }
  ) }
);

export type DeleteAddressMutationVariables = Exact<{
  data: Scalars['String'];
}>;


export type DeleteAddressMutation = (
  { __typename?: 'Mutation' }
  & { deleteAddress: (
    { __typename?: 'Result' }
    & { success?: Maybe<Array<(
      { __typename?: 'Response' }
      & Pick<Response, 'path' | 'message'>
    )>>, errors?: Maybe<Array<(
      { __typename?: 'Response' }
      & Pick<Response, 'path' | 'message'>
    )>> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'Result' }
    & { success?: Maybe<Array<(
      { __typename?: 'Response' }
      & Pick<Response, 'path' | 'message'>
    )>>, errors?: Maybe<Array<(
      { __typename?: 'Response' }
      & Pick<Response, 'path' | 'message'>
    )>> }
  ) }
);

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'LoginResult' }
    & { success?: Maybe<(
      { __typename?: 'LoginSuccess' }
      & Pick<LoginSuccess, 'accessToken' | 'expiresIn'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'role'>
      )> }
    )>, errors?: Maybe<Array<(
      { __typename?: 'Response' }
      & Pick<Response, 'path' | 'message'>
    )>> }
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type AddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type AddressesQuery = (
  { __typename?: 'Query' }
  & { addresses: Array<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'street' | 'city' | 'state' | 'zip'>
  )> }
);

export type AddressQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type AddressQuery = (
  { __typename?: 'Query' }
  & { address: (
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'street' | 'city' | 'state' | 'zip'>
  ) }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'phone' | 'role' | 'creationTime'>
    & { address?: Maybe<Array<(
      { __typename?: 'Address' }
      & Pick<Address, 'street' | 'city' | 'state' | 'zip'>
    )>> }
  )> }
);

export type UserQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'phone' | 'role' | 'creationTime'>
    & { address?: Maybe<Array<(
      { __typename?: 'Address' }
      & Pick<Address, 'street' | 'city' | 'state' | 'zip'>
    )>> }
  ) }
);

export const CreateAddressDocument = gql`
    mutation createAddress($data: AddressInput!) {
  createAddress(input: $data) {
    success {
      path
      message
    }
    errors {
      path
      message
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateAddressGQL extends Apollo.Mutation<CreateAddressMutation, CreateAddressMutationVariables> {
    document = CreateAddressDocument;
    
  }
export const DeleteAddressDocument = gql`
    mutation deleteAddress($data: String!) {
  deleteAddress(id: $data) {
    success {
      path
      message
    }
    errors {
      path
      message
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteAddressGQL extends Apollo.Mutation<DeleteAddressMutation, DeleteAddressMutationVariables> {
    document = DeleteAddressDocument;
    
  }
export const RegisterDocument = gql`
    mutation register($data: RegisterInput!) {
  register(input: $data) {
    success {
      path
      message
    }
    errors {
      path
      message
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
  }
export const LoginDocument = gql`
    mutation login($data: LoginInput!) {
  login(input: $data) {
    success {
      user {
        id
        firstName
        lastName
        role
      }
      accessToken
      expiresIn
    }
    errors {
      path
      message
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
  }
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LogoutGQL extends Apollo.Mutation<LogoutMutation, LogoutMutationVariables> {
    document = LogoutDocument;
    
  }
export const AddressesDocument = gql`
    query addresses {
  addresses {
    id
    street
    city
    state
    zip
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddressesGQL extends Apollo.Query<AddressesQuery, AddressesQueryVariables> {
    document = AddressesDocument;
    
  }
export const AddressDocument = gql`
    query address($data: String!) {
  address(id: $data) {
    id
    street
    city
    state
    zip
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddressGQL extends Apollo.Query<AddressQuery, AddressQueryVariables> {
    document = AddressDocument;
    
  }
export const UsersDocument = gql`
    query users {
  users {
    id
    firstName
    lastName
    email
    phone
    address {
      street
      city
      state
      zip
    }
    role
    creationTime
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
  }
export const UserDocument = gql`
    query user($data: String!) {
  user(id: $data) {
    id
    firstName
    lastName
    email
    phone
    address {
      street
      city
      state
      zip
    }
    role
    creationTime
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserGQL extends Apollo.Query<UserQuery, UserQueryVariables> {
    document = UserDocument;
    
  }

  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  interface WatchQueryOptionsAlone<V>
    extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}
    
  interface QueryOptionsAlone<V>
    extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}
    
  interface MutationOptionsAlone<T, V>
    extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}
    
  interface SubscriptionOptionsAlone<V>
    extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

  @Injectable({ providedIn: 'root' })
  export class ApolloAngularSDK {
    constructor(
      private createAddressGql: CreateAddressGQL,
      private deleteAddressGql: DeleteAddressGQL,
      private registerGql: RegisterGQL,
      private loginGql: LoginGQL,
      private logoutGql: LogoutGQL,
      private addressesGql: AddressesGQL,
      private addressGql: AddressGQL,
      private usersGql: UsersGQL,
      private userGql: UserGQL
    ) {}
      
    createAddress(variables: CreateAddressMutationVariables, options?: MutationOptionsAlone<CreateAddressMutation, CreateAddressMutationVariables>) {
      return this.createAddressGql.mutate(variables, options)
    }
    
    deleteAddress(variables: DeleteAddressMutationVariables, options?: MutationOptionsAlone<DeleteAddressMutation, DeleteAddressMutationVariables>) {
      return this.deleteAddressGql.mutate(variables, options)
    }
    
    register(variables: RegisterMutationVariables, options?: MutationOptionsAlone<RegisterMutation, RegisterMutationVariables>) {
      return this.registerGql.mutate(variables, options)
    }
    
    login(variables: LoginMutationVariables, options?: MutationOptionsAlone<LoginMutation, LoginMutationVariables>) {
      return this.loginGql.mutate(variables, options)
    }
    
    logout(variables?: LogoutMutationVariables, options?: MutationOptionsAlone<LogoutMutation, LogoutMutationVariables>) {
      return this.logoutGql.mutate(variables, options)
    }
    
    addresses(variables?: AddressesQueryVariables, options?: QueryOptionsAlone<AddressesQueryVariables>) {
      return this.addressesGql.fetch(variables, options)
    }
    
    addressesWatch(variables?: AddressesQueryVariables, options?: WatchQueryOptionsAlone<AddressesQueryVariables>) {
      return this.addressesGql.watch(variables, options)
    }
    
    address(variables: AddressQueryVariables, options?: QueryOptionsAlone<AddressQueryVariables>) {
      return this.addressGql.fetch(variables, options)
    }
    
    addressWatch(variables: AddressQueryVariables, options?: WatchQueryOptionsAlone<AddressQueryVariables>) {
      return this.addressGql.watch(variables, options)
    }
    
    users(variables?: UsersQueryVariables, options?: QueryOptionsAlone<UsersQueryVariables>) {
      return this.usersGql.fetch(variables, options)
    }
    
    usersWatch(variables?: UsersQueryVariables, options?: WatchQueryOptionsAlone<UsersQueryVariables>) {
      return this.usersGql.watch(variables, options)
    }
    
    user(variables: UserQueryVariables, options?: QueryOptionsAlone<UserQueryVariables>) {
      return this.userGql.fetch(variables, options)
    }
    
    userWatch(variables: UserQueryVariables, options?: WatchQueryOptionsAlone<UserQueryVariables>) {
      return this.userGql.watch(variables, options)
    }
  }