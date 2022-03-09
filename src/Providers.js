import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'
})

const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_GITHUB_KEY;
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default function Providers({children}) {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}