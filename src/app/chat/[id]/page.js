"use client";
import Sidebar from "@/app/components/Sidebar";
import { Flex, Text } from "@chakra-ui/react";
import { collection, orderBy, query, doc } from "firebase/firestore";
import { useParams } from "next/navigation";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { db } from "../../../../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebaseconfig";
import getOtherEmail from "@/app/utils/getOtherEmail";
import Topbar from "@/app/components/topbar";
import Bottombar from "@/app/components/BottomBar";
import { useEffect, useRef } from "react";
export default function Chat() {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const q = query(
    collection(db, "chats", id, "messages"),
    orderBy("timestamp")
  );
  const [messages] = useCollectionData(q);
  const [chat] = useDocumentData(doc(db, "chats", id));
  const BottomofChat = useRef();
  const getMessages = () => {
    return messages?.map((msg, index) => {
      const sender = msg.sender === user.email;
      return (
        <Flex
          key={index}
          alignSelf={sender ? "flex-start" : "flex-end"}
          bg={sender ? "blue.100" : "green.100"}
          w="fit-content"
          minWidth="100px"
          m={1}
          p={3}
          borderRadius="lg"
        >
          <Text>{msg.text}</Text>
        </Flex>
      );
    });
  };

  useEffect(() => {
    setTimeout(
      BottomofChat.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      }),
      100
    );
  }, [messages]);
  return (
    <Flex h="100vh">
      <Sidebar />
      <Flex flex={1} direction="column">
        <Topbar email={getOtherEmail(chat?.users, user)} />
        <Flex
          flex={1}
          direction="column"
          pt={4}
          mx={5}
          overflowX="scroll"
          sx={{ scrollbarWidth: "none" }}
        >
          {getMessages()}
          <div ref={BottomofChat}></div>
        </Flex>
        <Bottombar id={id} user={user} />
      </Flex>
    </Flex>
  );
}
