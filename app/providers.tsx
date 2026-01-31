"use client";
import { } from "@apollo/client";
import { apolloClient } from "./graphql/client";
import { ApolloProvider } from "@apollo/client/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
