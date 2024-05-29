import { ArrowDownIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseconfig";
import { useAuthState } from 'react-firebase-hooks/auth';
const Chat=()=>{
    return(
        <Flex p={3} align='center' _hover={{bg:"gray.100",cursor:"pointer"}}>
            <Avatar src="" margin={3}/>
            <Text>user@gmail.com</Text>
        </Flex>
    )
}

export default function Sidebar() {
    const [user] = useAuthState(auth);
  return (
    <>
      <Flex
        // bg="blue.100"
        w="300px"
        h='100%'
        borderEnd="1px solid"
        borderColor="gray.200"
        direction='column'
      >
        <Flex
        //   bgColor="red.200"
          h="81px"
          w="100%"
          align="center"
          justifyContent="space-between"
          p={3}
        >
          <Flex align="center">
            <Avatar src={user.photoURL} marginEnd={3} />
            <Text>{user.displayName}</Text>
          </Flex>

          <IconButton size="sm" isRound icon={<ArrowDownIcon />} onClick={()=>signOut(auth)}></IconButton>
        </Flex>
        <Button m={5} p={4} >New Chat</Button>
        <Flex overflowX='scroll' direction='column' sx={{scrollbarWidth:'none'}} flex={1}> 
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>

        </Flex>
      
      </Flex>
    </>
  );
}
