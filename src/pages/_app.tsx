import GlobalStyles from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ThemeProvider } from "styled-components";
import theme, { muiTheme } from "@/styles/Theme";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>BikeMeet</title>
        <meta name="description" content="Never ride alone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <GlobalStyles />
              <SessionProvider session={session}>
                <Layout>
                  <ProtectedRoute>
                    <Component {...pageProps} />
                  </ProtectedRoute>
                </Layout>
              </SessionProvider>
            </Provider>
          </QueryClientProvider>
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
