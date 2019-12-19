import { array } from "prop-types";
import React from "react";
import User from "./User";

const UserList = ({ users }) => (
  <ul>
    {users.map(user => {
      return <User key={user.id} user={user} />;
    })}
  </ul>
);

UserList.propTypes = {
  users: array.isRequired
};

export default UserList;
