import { ArrowDownIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth, db } from "../../../firebaseconfig";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from "firebase/firestore";
import getOtherEmail from "../../../utils/getOtherEmail";

export default function Sidebar() {
    const [snapshot, loading, error] = useCollection(collection(db,'chats'));
    const [user] = useAuthState(auth);
    console.log(snapshot)
    const chats=snapshot?.docs.map(doc=>({id:doc.id,...doc.data()}));

    const chatList=()=>{
        return(
            chats?.map( chat=>
                <Flex key={chat.id} p={3} align='center' _hover={{bg:"gray.100",cursor:"pointer"}}>
                <Avatar src="" margin={3}/>
                <Text>{getOtherEmail(chat.users,user)}</Text>
            </Flex>
            )
            
        )
    }
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
       {chatList()}

        </Flex>
      
      </Flex>
    </>
  );
}
