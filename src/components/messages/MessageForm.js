import { func, object } from "prop-types";
import React, { useState } from "react";

const MessageForm = ({ addMessage, activeChannel }) => {
  const [message, setMessage] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    addMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        {activeChannel && activeChannel.id !== undefined && (
          <input
            type="text"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="form-control"
            placeholder="Add Message..."
          />
        )}
      </div>
    </form>
  );
};

MessageForm.propTypes = {
  activeChannel: object.isRequired,
  addMessage: func.isRequired
};

export default MessageForm;
