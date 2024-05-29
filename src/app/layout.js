'use client';
import { Inter } from "next/font/google";
import Login from "./components/login";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Flex>
        <Sidebar/>
        {children}
        {/* <Login/> */}
        </Flex>
        </ChakraProvider>
      </body> 
    </html>
  );
}
