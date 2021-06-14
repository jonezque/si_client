import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export interface LoginData {
  email: Scalars['String']
  password: Scalars['String']
}

export interface Mutation {
  __typename?: 'Mutation'
  Login: Scalars['String']
}

export interface MutationLoginArgs {
  loginData: LoginData
}

export interface Project {
  __typename?: 'Project'
  id: Scalars['Float']
  name: Scalars['String']
  ownerId: Scalars['Float']
}

export interface ProjectData {
  id: Scalars['Float']
}

export interface Query {
  __typename?: 'Query'
  VerifyToken?: Maybe<User>
  GetProjectById?: Maybe<Project>
  GetAllProjects: Project[]
}

export interface QueryGetProjectByIdArgs {
  projectId: ProjectData
}

export interface User {
  __typename?: 'User'
  id: Scalars['Float']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
}

export type VerifyTokenQueryVariables = Exact<{ [key: string]: never }>

export type VerifyTokenQuery = { __typename?: 'Query' } & {
  VerifyToken?: Maybe<{ __typename?: 'User' } & UserDataFragment>
}

export type UserDataFragment = { __typename?: 'User' } & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>

export type LoginMutationVariables = Exact<{
  loginData: LoginData
}>

export type LoginMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'Login'>

export type GetAllProjectsQueryVariables = Exact<{ [key: string]: never }>

export type GetAllProjectsQuery = { __typename?: 'Query' } & {
  GetAllProjects: Array<{ __typename?: 'Project' } & Pick<Project, 'id' | 'name'>>
}

export const UserDataFragmentDoc = gql`
  fragment UserData on User {
    id
    email
    firstName
    lastName
  }
`
export const VerifyTokenDocument = gql`
  query VerifyToken {
    VerifyToken {
      ...UserData
    }
  }
  ${UserDataFragmentDoc}
`

/**
 * __useVerifyTokenQuery__
 *
 * To run a query within a React component, call `useVerifyTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useVerifyTokenQuery(
  baseOptions?: Apollo.QueryHookOptions<VerifyTokenQuery, VerifyTokenQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<VerifyTokenQuery, VerifyTokenQueryVariables>(VerifyTokenDocument, options)
}
export function useVerifyTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<VerifyTokenQuery, VerifyTokenQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<VerifyTokenQuery, VerifyTokenQueryVariables>(VerifyTokenDocument, options)
}
export type VerifyTokenQueryHookResult = ReturnType<typeof useVerifyTokenQuery>
export type VerifyTokenLazyQueryHookResult = ReturnType<typeof useVerifyTokenLazyQuery>
export type VerifyTokenQueryResult = Apollo.QueryResult<VerifyTokenQuery, VerifyTokenQueryVariables>
export const LoginDocument = gql`
  mutation Login($loginData: LoginData!) {
    Login(loginData: $loginData)
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginData: // value for 'loginData'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const GetAllProjectsDocument = gql`
  query GetAllProjects {
    GetAllProjects {
      id
      name
    }
  }
`

/**
 * __useGetAllProjectsQuery__
 *
 * To run a query within a React component, call `useGetAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProjectsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllProjectsQuery, GetAllProjectsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(GetAllProjectsDocument, options)
}
export function useGetAllProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllProjectsQuery, GetAllProjectsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(GetAllProjectsDocument, options)
}
export type GetAllProjectsQueryHookResult = ReturnType<typeof useGetAllProjectsQuery>
export type GetAllProjectsLazyQueryHookResult = ReturnType<typeof useGetAllProjectsLazyQuery>
export type GetAllProjectsQueryResult = Apollo.QueryResult<GetAllProjectsQuery, GetAllProjectsQueryVariables>
