import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, Search, SpaceBarOutlined } from "@material-ui/icons";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import Mic from "@material-ui/icons/Mic";
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import "./Chat.css";
import db from "./firebase";


function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");   
    const { roomId } = useParams();
    const [ roomName, setRoomName] = useState("");


     useEffect(() => {
      if(roomId){
          db.collection("rooms")
          .doc(roomId)
          .onSnapshot(snapshot => setRoomName(snapshot.data().name)); 
      }
     },[roomId]);



 const sendMessage = (e) =>{
    e.preventDefault();
    console.log("You typed >>>",input);

    setInput("");
 };


    return <div className="chat">
        <div className="chat__header">
         <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>


         <div className="chat__headerInfo">
             <h3>{roomName}</h3>
             <p>Last seen at..</p>
         </div>
         <div className="chat__headerright">
         <IconButton>
        <Search/>
        </IconButton>
        <IconButton>
        <AttachFile/> 
        </IconButton>
        <IconButton>
        <MoreVert/>
        </IconButton>   
         </div>
        </div>
        <div className="chat__body">
        <p className={`chat__message ${true &&"chat__reciever"}`}>
        <span className="chat__name">shakil hasan</span> 
        Hello
        <span className="chat__timestamp">
            5:57pm
        </span>
        </p>
        </div>
        <div className="chat__footer">
      <InsertEmoticon/>
      <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a Message" type="text"/>  
          <button onClick={sendMessage} type="submit">Send a message</button>
      </form>
      <Mic/>
        </div>
    </div>;
    
}

export default Chat
