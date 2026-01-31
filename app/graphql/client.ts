import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ENV } from "../configs/env";

export const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: ENV.GRAPHQL_API_URL }),
    cache: new InMemoryCache(),
});