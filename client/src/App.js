import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";

import Login from "./components/Login";
import Chat from "./components/Chat";

let socket = io.connect("localhost:5000/");

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("receive_message", data => {
      setMessageList([...messageList, data]);
    });
  });

  return (
    <div className="App">
      {!loggedIn ? (
        <Login
          socket={socket}
          room={room}
          setLoggedIn={setLoggedIn}
          setUserName={setUserName}
          setRoom={setRoom}
        />
      ) : (
        <Chat
          socket={socket}
          room={room}
          message={message}
          messageList={messageList}
          userName={userName}
          setMessage={setMessage}
          setMessageList={setMessageList}
        />
      )}
    </div>
  );
}

export default App;
