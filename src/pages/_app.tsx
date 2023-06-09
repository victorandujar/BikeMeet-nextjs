import GlobalStyles from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/Header/Header";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/Theme";
import { SessionProvider } from "next-auth/react";
import BottomNavbarWrapper from "@/components/BottomNavbarWrapper/BottomNavbarWrapper";
import Layout from "@/components/Layout/Layout";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
      <Head>
        <title>BikeMeet</title>
        <meta name="description" content="Never ride alone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyles />
          <SessionProvider session={session}>
            <Layout />
            <Component {...pageProps} />
          </SessionProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
