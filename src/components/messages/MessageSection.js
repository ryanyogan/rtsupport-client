import { array, func, object } from "prop-types";
import React from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

const MessageSection = props =>
  console.log(props) || (
    <div className="messages-container panel panel-default">
      <div className="panel-heading">
        <strong>{props.activeChannel.name || "Select A Channel"}</strong>
      </div>
      <div className="panel-body messages">
        <MessageList {...props} />
        <MessageForm {...props} />
      </div>
    </div>
  );

MessageSection.propTypes = {
  messages: array.isRequired,
  activeChannel: object.isRequired,
  addMessage: func.isRequired
};

export default MessageSection;
