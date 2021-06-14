import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

let url = ''

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:4000'
}

if (process.env.NODE_ENV === 'production') {
  url = 'https://tablichka.herokuapp.com'
}

const httpLink = createHttpLink({
  uri: `${url}/graphql`
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
