import { func } from "prop-types";
import React, { useState } from "react";

const UserForm = ({ setUserName }) => {
  const [user, onUserChange] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    setUserName(user);
    onUserChange("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={user}
          onChange={e => onUserChange(e.target.value)}
          placeholder="Set Your Name..."
        />
      </div>
    </form>
  );
};

UserForm.propTypes = {
  setUserName: func.isRequired
};

export default UserForm;
