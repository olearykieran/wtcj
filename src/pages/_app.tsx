// pages/_app.tsx
import "../app/globals.css"; // Adjust the path to your global styles
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global components like headers or footers can go here */}
      <Component {...pageProps} />
      {/* If you want Footer here, it will appear on every page */}
    </>
  );
}

export default MyApp;
