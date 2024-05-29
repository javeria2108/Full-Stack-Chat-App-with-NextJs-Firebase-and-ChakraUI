import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseconfig";
export default function Login() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <>
      <Head>
        <title>login</title>
      </Head>
      <Center h="100vh">
        <Stack align="Center"
        bgColor='gray.500' p={16} spacing={12} rounded='3xl' boxShadow='lg'>
          <Box
            bgColor="blue.500"
            p={5}
            width="fit-content"
            rounded="3xl"
            boxShadow="md"
          >
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>
          <Button boxShadow="md" onClick={()=>signInWithGoogle("",{prompt:"select_account"})}>Sign In with Google</Button>
        </Stack>
      </Center>
    </>
  );
}
