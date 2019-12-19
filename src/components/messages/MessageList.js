import { array } from "prop-types";
import React from "react";
import Message from "./Message";

const MessageList = props =>
  console.log(props) || (
    <ul>
      {props.messages.map(message => {
        return <Message key={message.id} message={message} />;
      })}
    </ul>
  );

MessageList.propTypes = {
  messages: array.isRequired
};

export default MessageList;
