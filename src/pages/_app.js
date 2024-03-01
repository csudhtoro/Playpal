"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { AuthContextProvider } from "@/context/AuthUserContext";
import "@/styles/globals.css";

export const metadata = {
  title: "PlayPal | Make Connections",
  description: "A place to connect with others with active lifestyles"
};

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}
