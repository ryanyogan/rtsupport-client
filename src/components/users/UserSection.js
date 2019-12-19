import { array, func } from "prop-types";
import React from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

const UserSection = props => {
  return (
    <div className="support panel panel-primary">
      <div className="panel-heading">
        <strong>Users</strong>
      </div>
      <div className="panel-body users">
        <UserList {...props} />
        <UserForm {...props} />
      </div>
    </div>
  );
};

UserSection.propTypes = {
  users: array.isRequired,
  setUserName: func.isRequired
};

export default UserSection;
