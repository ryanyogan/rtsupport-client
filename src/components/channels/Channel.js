import { func, object } from "prop-types";
import React from "react";

const Channel = ({ channel, setChannel }) => {
  const onClick = e => {
    e.preventDefault();

    setChannel(channel);
  };

  return (
    <li>
      <a href="#/" onClick={onClick}>
        {channel.name}
      </a>
    </li>
  );
};

Channel.propTypes = {
  channel: object.isRequired,
  setChannel: func.isRequired
};

export default Channel;
