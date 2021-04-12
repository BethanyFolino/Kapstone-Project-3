import React, { Fragment, useState } from "react";

const Register = () => {
  return (
    <Fragment>
      <div container>
        <h7>Sign up here</h7>
        {/* {fullySignedUp && <div>You are now signed up and logged in!</div>} */}
        <form id="signup-form">
          <label>Name</label>
          <input type="text" name="name" autoFocus required />
          <label>Email</label>
          <input type="text" name="email" required />
          <label>Password</label>
          <input type="password" name="password" required />
          {/* {!fullySignedUp && <button type="submit">Sign Up</button>} */}
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
