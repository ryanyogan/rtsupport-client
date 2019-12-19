import React, { useState } from "react";
import ChannelSection from "./components/channels/ChannelSection";
import MessageSection from "./components/messages/MessageSection";
import UserSection from "./components/users/UserSection";

function App() {
  const [channels, setChannels] = useState([]);
  const [activeChannel, setActiveChannel] = useState({});
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  const addChannel = name => {
    const newChannels = [{ id: channels.length, name }, ...channels];
    setChannels(newChannels);
  };

  const onAddUser = user => {
    const newUsers = [{ user }, ...users];
    setUsers(newUsers);
  };

  const setChannel = channel => {
    setActiveChannel(channel);
  };

  const setUserName = name => {
    // TODO: Implement a socket to the server
    const newUsers = [{ id: users.length, name }, ...users];
    setUsers(newUsers);
  };

  const addMessage = body => {
    // TODO: this.socket.emit('message add', {channelId: activeChannel.id, body })
    const createdAt = new Date();
    const author = users.length > 0 ? users[0].name : "anonymous";
    const newMessages = [
      { id: messages.length, body, createdAt, author },
      ...messages
    ];
    console.log(newMessages);
    setMessages(newMessages);
  };

  return (
    <div className="app">
      <div className="nav">
        <ChannelSection
          activeChannel={activeChannel}
          setChannel={setChannel}
          channels={channels}
          addChannel={addChannel}
        />
        <UserSection users={users} setUserName={setUserName} />
      </div>
      <MessageSection
        addMessage={addMessage}
        messages={messages}
        activeChannel={activeChannel}
      />
    </div>
  );
}

export default App;
