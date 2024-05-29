import { ArrowDownIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";

const Chat=()=>{
    return(
        <Flex p={3} align='center' _hover={{bg:"gray.100",cursor:"pointer"}}>
            <Avatar src="" margin={3}/>
            <Text>user@gmail.com</Text>
        </Flex>
    )
}

export default function Sidebar() {
  return (
    <>
      <Flex
        bg="blue.100"
        w="300px"
        h="100vh"
        borderEnd="1px solid"
        borderColor="gray.200"
        direction='column'
      >
        <Flex
          bgColor="red.200"
          h="81px"
          w="100%"
          align="center"
          justifyContent="space-between"
          p={3}
        >
          <Flex align="center">
            <Avatar src="" marginEnd={3} />
            <Text>ALbert Einstein</Text>
          </Flex>

          <IconButton size="sm" isRound icon={<ArrowDownIcon />}></IconButton>
        </Flex>
        <Button m={5} p={4} >New Chat</Button>
        <Flex overflowX='scroll' direction='column' sx={{scrollbarWidth:'none'}}> 
        <Chat/>
        </Flex>
      
      </Flex>
    </>
  );
}
