import { array, func, object } from "prop-types";
import React from "react";
import ChannelForm from "./ChannelForm";
import ChannelList from "./ChannelList";

const ChannelSection = props => {
  return (
    <div className="support panel panel-primary">
      <div className="panel-heading">
        <strong>Channels</strong>
      </div>
      <div className="panel-body channels">
        <ChannelList {...props} />
        <ChannelForm {...props} />
      </div>
    </div>
  );
};

ChannelSection.propTypes = {
  channels: array.isRequired,
  setChannel: func.isRequired,
  addChannel: func.isRequired,
  activeChannel: object.isRequired
};

export default ChannelSection;
