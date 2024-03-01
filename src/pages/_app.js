"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { AuthContextProvider } from "@/context/AuthUserContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Playpal</title>
        <meta name="description" content="A place to meet activity partners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <AuthContextProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </AuthContextProvider>
      </div>
    </>
  );
}
