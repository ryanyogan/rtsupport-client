import { object } from "prop-types";
import React from "react";

const Message = message => (
  <li className="message">
    <div className="author">
      <strong>{message.author}</strong>
      <i className="timestamp">{message.createdAt}</i>
    </div>
    <div className="body">{message.body}</div>
  </li>
);

Message.propTypes = {
  message: object.isRequired
};

export default Message;
