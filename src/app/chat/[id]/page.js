'use client'
import Sidebar from "@/app/components/Sidebar";
import { Avatar, Button, Flex, FormControl, Heading, Input } from "@chakra-ui/react";
import { collection, orderBy,query } from "firebase/firestore";
import { useRouter,useParams} from "next/navigation";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from "../../../../firebaseconfig";
const Topbar=()=>{
    return(
        <Flex bg='gray.100' h='81px' w='100%' align='center' p={5}>
            <Avatar src="" marginEnd={3}/>
            <Heading size='lg'>user@gmail.com</Heading>
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
    const router=useRouter();
    const {id}=useParams();
    const q=query(collection(db,'chats',id,'messages'),orderBy('timestamp'))
    const [messages] = useCollectionData(q);
    console.log(messages);
    return (
        <Flex h='100vh'>
        <Sidebar/>
        <Flex flex={1} direction='column'>
            <Topbar/>
            <Flex flex={1} direction='column' pt={4} mx={5} overflowX='scroll' sx={{scrollbarWidth: 'none'}}>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg">
                    Ho, this is a dummy message
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg" alignSelf='flex-end'>
                    copy that
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg">
                    Ho, this is a dummy message
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg" alignSelf='flex-end'>
                    copy that
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg">
                    Ho, this is a dummy message
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg" alignSelf='flex-end'>
                    copy that
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg">
                    Ho, this is a dummy message
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg" alignSelf='flex-end'>
                    copy that
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg">
                    Ho, this is a dummy message
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg" alignSelf='flex-end'>
                    copy that
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg">
                    Ho, this is a dummy message
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg" alignSelf='flex-end'>
                    copy that
                </Flex>
                <Flex bg='blue.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg">
                    Ho, this is a dummy message
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg" alignSelf='flex-end'>
                    copy that
                </Flex><Flex bg='blue.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg">
                    Ho, this is a dummy message
                </Flex>
                <Flex bg='green.100' w='fit-content' minWidth='100px' m={1} p={3} borderRadius="lg" alignSelf='flex-end'>
                    copy that
                </Flex>
            </Flex>
            <Bottombar/>
        </Flex>
        </Flex>
    )
}