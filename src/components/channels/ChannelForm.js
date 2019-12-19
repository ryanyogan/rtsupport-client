import { func } from "prop-types";
import React, { useState } from "react";

const ChannelForm = ({ addChannel }) => {
  const [channelName, setChannelName] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    addChannel(channelName);
    setChannelName("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Add Channel"
          name="channel"
          value={channelName}
          onChange={e => setChannelName(e.target.value)}
        />
      </div>
    </form>
  );
};

ChannelForm.propTypes = {
  addChannel: func.isRequired
};

export default ChannelForm;
