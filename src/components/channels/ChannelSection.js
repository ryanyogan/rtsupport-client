import { array, func } from "prop-types";
import React from "react";
import ChannelForm from "./ChannelForm";
import ChannelList from "./ChannelList";

const ChannelSection = ({ channels, setChannel, addChannel }) => {
  return (
    <div className="support panel panel-primary">
      <div className="panel-heading">
        <strong>Channels</strong>
      </div>
      <div className="panel-body channels">
        <ChannelList channels={channels} setChannel={setChannel} />
        <ChannelForm addChannel={addChannel} />
      </div>
    </div>
  );
};

ChannelSection.propTypes = {
  channels: array.isRequired,
  setChannel: func.isRequired,
  addChannel: func.isRequired
};

export default ChannelSection;
