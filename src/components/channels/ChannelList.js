import { array, func } from "prop-types";
import React from "react";
import Channel from "./Channel";

const ChannelList = ({ setChannel, channels }) => {
  return (
    <ul>
      {channels.map(chan => (
        <Channel key={chan.id} channel={chan} setChannel={setChannel} />
      ))}
    </ul>
  );
};

ChannelList.propTypes = {
  channels: array.isRequired,
  setChannel: func.isRequired
};

export default ChannelList;
