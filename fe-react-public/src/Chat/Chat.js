import React, { useState, useEffect } from "react";
import update from "immutability-helper";
import "react-chat-elements/dist/main.css";

const Chat = (props) => {
  const [chatState, setChatState] = useState(["STARTING TEXT"]);
  const addMessage = (msg) => {
    setChatState((prevChatState) => update(prevChatState, { $push: [msg] }));
  };

  const handleSocketMsg = (evt) => {
    var msgs = evt.data.split("\n");
    for (var i = 0; i < msgs.length; i++) {
      addMessage(msgs[i]);
      console.log(chatState);
    }
  };
  useEffect(() => {
    console.log("this is only executed when it's created");
    const conn = new WebSocket("ws://localhost:8000/ws");

    conn.onmessage = handleSocketMsg;
    conn.onopen = (event) => {
      console.log("WebSocket is open now.");
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
