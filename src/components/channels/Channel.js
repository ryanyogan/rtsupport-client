import { func, object } from "prop-types";
import React from "react";

const Channel = ({ setChannel, channel, activeChannel }) => {
  const onClick = e => {
    e.preventDefault();

    setChannel(channel);
  };

  const active = channel === activeChannel ? "active" : "";

  return (
    <li className={active}>
      <a href="#/" onClick={onClick}>
        {channel.name}
      </a>
    </li>
  );
};

Channel.propTypes = {
  channel: object.isRequired,
  setChannel: func.isRequired,
  activeChannel: object.isRequired
};

export default Channel;
