"use client";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Chat App</title>
      </Head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
