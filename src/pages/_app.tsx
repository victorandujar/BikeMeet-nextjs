import GlobalStyles from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BikeMeet</title>
        <meta name="description" content="Never ride alone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
