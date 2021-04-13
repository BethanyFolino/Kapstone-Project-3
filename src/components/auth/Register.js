import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <Fragment>
      <div container>
        <h7>Sign up here</h7>
        {/* {fullySignedUp && <div>You are now signed up and logged in!</div>} */}
        <form id="signup-form" onSubmit={(e) => onSubmit(e)}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
            autoFocus
            required
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            placeholder="Confirm Password"
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            required
          />
          {/* {!fullySignedUp && <button type="submit">Sign Up</button>} */}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Register);
