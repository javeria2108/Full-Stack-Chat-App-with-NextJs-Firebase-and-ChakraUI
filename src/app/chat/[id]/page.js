'use client'
import Sidebar from "@/app/components/Sidebar";
import { Avatar, Button, Flex, FormControl, Heading, Input,Text } from "@chakra-ui/react";
import { collection, orderBy,query,doc } from "firebase/firestore";
import { useRouter,useParams} from "next/navigation";
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from "../../../../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebaseconfig";
import getOtherEmail from "@/app/utils/getOtherEmail";
const Topbar=({email})=>{
    return(
        <Flex bg='gray.100' h='81px' w='100%' align='center' p={5}>
            <Avatar src="" marginEnd={3}/>
            <Heading size='lg'>{email}</Heading>
        </Flex>
    )
}
const Bottombar=()=>{
    return(
      <FormControl p={3}>
        <Input placeholder="type a message..."></Input>
        <Button type="submit" hidden autoComplete='off'>submit</Button>
      </FormControl>
    )
}
export default function Chat(){
    const [user]=useAuthState(auth);
    const {id}=useParams();
    const q=query(collection(db,'chats',id,'messages'),orderBy('timestamp'))
    const [messages] = useCollectionData(q);
  const [chat]=useDocumentData(doc(db,"chats",id));
    const getMessages = () => {
        return messages?.map((msg, index) => {
            const sender = msg.sender === user.email;
            return (
                <Flex
                    key={index}
                    alignSelf={sender ? 'flex-start' : 'flex-end'}
                    bg={sender ? 'blue.100' : "green.100"}
                    w='fit-content'
                    minWidth='100px'
                    m={1}
                    p={3}
                    borderRadius="lg"
                >
                    <Text>{msg.text}</Text>
                </Flex>
            )
        });
    };
    return (
        <Flex h='100vh'>
        <Sidebar/>
        <Flex flex={1} direction='column'>
            <Topbar email={getOtherEmail(chat?.users,user)}/>
            <Flex flex={1} direction='column' pt={4} mx={5} overflowX='scroll' sx={{scrollbarWidth: 'none'}}>

                {getMessages()}
            </Flex>
            <Bottombar/>
        </Flex>
        </Flex>
    )
}