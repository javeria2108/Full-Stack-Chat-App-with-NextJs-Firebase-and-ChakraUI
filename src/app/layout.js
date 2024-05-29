'use client';
import { Inter } from "next/font/google";
import Login from "./components/login";
import { ChakraProvider } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
        {/* {children} */}
        {/* <Login/> */}
        <Sidebar/>
        </ChakraProvider>
      </body> 
    </html>
  );
}
