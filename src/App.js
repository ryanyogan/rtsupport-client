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
    return name;
  };

  const addMessage = body => {};
  // TODO: this.socket.emit('message add', {channelId: activeChannel.id, body })

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
