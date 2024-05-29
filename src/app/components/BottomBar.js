import { useState } from "react";
import {  Button, FormControl, Input } from "@chakra-ui/react";
import { collection,addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
const Bottombar=({id,user})=>{
    const [input, setInput]=useState("");
    const sendMessage=async (e)=>{
        e.preventDefault();
        await addDoc(collection(db,`chats/${id}/messages`),{
            text: input,
            sender:user.email,
            timestamp: serverTimestamp()
        })
        setInput("");
    }
    return(
      <FormControl p={3} onSubmit={sendMessage} as='form'>
        <Input placeholder="type a message..." onChange={e=>setInput(e.target.value)} value={input}></Input>
        <Button type="submit" hidden>submit</Button>
      </FormControl>
    )
}
export default Bottombar