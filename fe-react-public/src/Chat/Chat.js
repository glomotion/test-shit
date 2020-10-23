// MessageBox component
import React, { useState, useEffect, update } from 'react';
import 'react-chat-elements/dist/main.css';
import { MessageList, Input, Button } from 'react-chat-elements'

const Chat = (props) => {

  const [chatState, setChatState] = useState(["text"]);
  const addMessage = (msg) => {
    setChatState(prevChatState => update(prevChatState, { $push: [msg] }));
    //console.log(chatState);
  }
// setMessages(prevMessages => update(prevMessages, { $push: [msg] }););
/*
   setChatState([...chatState, {
      position: 'center',
      type: 'text',
      text: msg,
      date: new Date(),
    }]);
*/
  const handleMsg = (evt) => {
    var msgs = evt.data.split('\n');
    for (var i = 0; i < msgs.length; i++) {
      addMessage(msgs[i]);
      console.log(chatState);
    }
    //console.log(chatState);
  }
  useEffect(() => {
    console.log("this is only executed when it's created");
    const conn = new WebSocket("ws://localhost:8000/ws");

    conn.onmessage = handleMsg ;
    conn.onopen = function (event) {
      console.log("WebSocket is open now.");
    };
  }, []);


  const sendMessage = (event) => {
    console.log("event ", event);
    addMessage("something something");

  }
  return <div>
    {JSON.stringify(chatState)}
    <button onClick={sendMessage}>Button</button> 


  </div>
}

export default Chat;