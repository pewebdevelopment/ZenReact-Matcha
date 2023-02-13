import React from "react";
import { AppProps } from "next/app";
import Auth from "../components/auth";
// import { UserProvider } from "@/components/auth";
import "../styles/index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { SocketsProvider } from "@/components/Sockets";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Auth.UserProvider>
    <QueryClientProvider client={queryClient}>
      <SocketsProvider>
        <Component {...pageProps} />
      </SocketsProvider>
    </QueryClientProvider>
  </Auth.UserProvider>
);

export default App;
