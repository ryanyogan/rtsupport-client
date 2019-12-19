import { object } from "prop-types";
import React from "react";

const User = ({ user }) => <li>{user.name}</li>;

User.propTypes = {
  user: object.isRequired
};

export default User;
