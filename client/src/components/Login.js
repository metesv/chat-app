import React from "react";

function Login({ socket, room, setLoggedIn, setUserName, setRoom }) {
  const connectToRoom = () => {
    setLoggedIn(true);
    socket.emit("join_room", room);
  };
  return (
    <div className="login">
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Room..."
          onChange={e => {
            setRoom(e.target.value);
          }}
        />
      </div>
      <button onClick={connectToRoom}>Enter Chat</button>
    </div>
  );
}

export default Login;
