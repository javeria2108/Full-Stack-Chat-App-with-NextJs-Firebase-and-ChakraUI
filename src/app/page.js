'use client'
import Sidebar from "./components/Sidebar";
import Login from "./components/login";
import { Center, ChakraProvider, Flex, Spinner,Box } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseconfig";
export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <ChakraProvider>
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      </ChakraProvider>
    );
  }
  if (!user) {
    return (
   
          <ChakraProvider>
            <Login />
          </ChakraProvider>
       
    );
  }
  return (
    
        <ChakraProvider>
          <Flex>
            <Box h='100vh'>
            <Sidebar />
            </Box>
          </Flex>
        </ChakraProvider>
    
  );
}
