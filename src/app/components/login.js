import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";
export default function Login() {
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
          <Button boxShadow="md">Sign In with Google</Button>
        </Stack>
      </Center>
    </>
  );
}
