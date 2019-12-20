import React, { Component } from "react";
import ChannelSection from "./components/channels/ChannelSection";
import MessageSection from "./components/messages/MessageSection";
import UserSection from "./components/users/UserSection";

class App extends Component {
  state = {
    channels: [],
    users: [],
    messages: [],
    activeChannel: {},
    connected: false
  };

  onMessageAdd = message => {
    const { messages } = this.state;

    messages.push(message);
    this.setState({ messages });
  };

  onRemoveUser = removeUser => {
    const { users } = this.state;
    const filteredUsers = users.filter(user => user.id !== removeUser.id);

    this.setState({ users: filteredUsers });
  };

  addChannel = name => {
    this.ws.removeEventListener("channel add", { name });
  };

  onAddUser = user => {
    const { users } = this.state;

    const newUsers = [{ user }, ...users];
    this.setState({ users: newUsers });
  };

  setChannel = activeChannel => {
    this.setState({ activeChannel });
  };

  setUserName = name => {
    const { users } = this.state;
    // TODO: Implement a socket to the server
    const newUser = { id: users.length, name };
    users.push(newUser);
    this.setState({ users });
  };

  addMessage = body => {
    const { messages, users } = this.state;
    // TODO: this.socket.emit('message add', {channelId: activeChannel.id, body })
    const createdAt = new Date();
    const author = users.length > 0 ? users[0].name : "anonymous";
    const newMessages = [
      { id: messages.length, body, createdAt, author },
      ...messages
    ];

    this.setState({ messages: newMessages });
  };

  newChannel = channel => {
    const { channels } = this.state;
    channels.push(channel);
    this.setState({ channels });
  };

  addChannel = name => {
    const { channels } = this.state;

    const msg = {
      name: "channel add",
      data: {
        id: channels.length,
        name
      }
    };
    this.ws.send(JSON.stringify(msg));
  };

  handleMessage = message => {
    const event = JSON.parse(message.data);

    switch (event.name) {
      case "channel add":
        this.newChannel(event.data);
        break;

      default:
        console.log("F");
    }
  };

  open = () => {
    this.setState({ connected: true });
  };

  close = () => {
    this.setState({ connected: false });
  };

  componentDidMount() {
    const ws = (this.ws = new WebSocket("ws://echo.websocket.org"));
    ws.onmessage = this.handleMessage;
    ws.onopen = this.open;
    ws.onclose = this.close;
  }

  render() {
    const { activeChannel, channels, users, messages } = this.state;

    return (
      <div className="app">
        <div className="nav">
          <ChannelSection
            activeChannel={activeChannel}
            setChannel={this.setChannel}
            channels={channels}
            addChannel={this.addChannel}
          />
          <UserSection users={users} setUserName={this.setUserName} />
        </div>
        <MessageSection
          addMessage={this.addMessage}
          messages={messages}
          activeChannel={activeChannel}
        />
      </div>
    );
  }
}

export default App;
