import React, { useState } from "react";
import ChannelSection from "./components/channels/ChannelSection";

function App() {
  const [channels, setChannels] = useState([]);
  const [activeChannel, setActiveChannel] = useState({});

  const addChannel = name => {
    const newChannels = [{ id: channels.length, name }, ...channels];
    setChannels(newChannels);
  };

  const setChannel = channel => {
    setActiveChannel(channel);
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
      </div>
    </div>
  );
}

export default App;
