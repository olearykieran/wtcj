// Import the necessary modules from Next.js
import Head from "next/head";
import "../app/globals.css"; // Adjust the path to your global styles
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* This ensures the viewport meta tag is correctly placed within the <head> section of the document */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Global components like headers or footers can go here */}
      <Component {...pageProps} />
      {/* If you want Footer here, it will appear on every page */}
    </>
  );
}

export default MyApp;
