import { array, func, object } from "prop-types";
import React from "react";
import Channel from "./Channel";

const ChannelList = props => {
  return (
    <ul>
      {props.channels.map(chan => (
        <Channel key={chan.id} channel={chan} {...props} />
      ))}
    </ul>
  );
};

ChannelList.propTypes = {
  channels: array.isRequired,
  setChannel: func.isRequired,
  activeChannel: object.isRequired
};

export default ChannelList;
