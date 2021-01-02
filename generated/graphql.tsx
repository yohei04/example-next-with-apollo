import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<User>;
  _allUsersMeta: _QueryMeta;
  User: User;
  allPosts: Array<Post>;
  _allPostsMeta: _QueryMeta;
  Post: Post;
};


export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderBy>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryAllPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostOrderBy>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export type UserOrderBy = {
  firstName?: Maybe<OrderBy>;
  lastName?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

export enum OrderBy {
  Asc = 'asc',
  Desc = 'desc'
}

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};


export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count: Scalars['Int'];
};

export type PostOrderBy = {
  title?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  votes?: Maybe<OrderBy>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  url: Scalars['String'];
  votes: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  votePost: Post;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  url: Scalars['String'];
};


export type MutationVotePostArgs = {
  id: Scalars['String'];
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName'>
  )> }
);


export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    id
    firstName
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;