import React from "react";

function Chat({
  room,
  message,
  socket,
  setMessageList,
  messageList,
  userName,
  setMessage,
}) {
  const sendMessage = async () => {
    let messageContent = {
      room,
      content: {
        author: userName,
        message: message,
      },
    };

    await socket.emit("send_message", messageContent);
    setMessageList([...messageList, messageContent.content]);
    setMessage("");
  };

  return (
    <div>
      <div className="messageList">
        {messageList.map(val => {
          return (
            <div id={val.author === userName ? "You" : "Other"}>
              <div>
                {val.author}: {val.message}
              </div>
            </div>
          );
        })}
      </div>
      <input
        type="text"
        placeholder="Message..."
        onChange={e => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
