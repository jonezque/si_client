import { gql } from '@apollo/client'

export const CHECK = gql`
  query VerifyToken {
    VerifyToken {
      ...UserData
    }
  }
  fragment UserData on User{
    id
    email
    firstName
    lastName
  }
`

export const LOGIN = gql`
  mutation Login($loginData: LoginData!) {
    Login(loginData: $loginData)
  }
`

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    GetAllProjects {
      id
      name
    }
  }
`
