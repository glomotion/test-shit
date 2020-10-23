import React, { useState, useEffect } from "react";
import "react-chat-elements/dist/main.css";

const Chat = (props) => {
  const [chatState, setChatState] = useState(["STARTING TEXT"]);
  const addMessage = (msg) => {
    setChatState((prevChatState) => [...prevChatState, msg]);
  };

  useEffect(() => {
    console.log("this is only executed when it's created");
    const socket = new WebSocket("ws://localhost:8000/ws");
    socket.onopen = (event) => {
      console.log("WebSocket is open now.");
    };
    socket.onmessage = (evt) => {
      var msgs = evt.data.split("\n");
      for (var i = 0; i < msgs.length; i++) {
        addMessage(msgs[i]);
      }
    };
  }, []);

  return (
    <div>
      {JSON.stringify(chatState)}
      <button onClick={() => addMessage("new text!!!")}>Button</button>
    </div>
  );
};

export default Chat;
