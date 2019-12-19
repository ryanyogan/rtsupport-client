import fecha from "fecha";
import { object } from "prop-types";
import React from "react";

const Message = ({ message }) => {
  const createdAt = fecha.format(
    new Date(message.createdAt),
    "HH:mm:ss MM/DD/YY"
  );
  return (
    <li className="message">
      <div className="author">
        <strong>{message.author}</strong>
        <i className="timestamp">{createdAt}</i>
      </div>
      <div className="body">{message.body}</div>
    </li>
  );
};

Message.propTypes = {
  message: object.isRequired
};

export default Message;
