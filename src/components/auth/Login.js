import React, { Fragment, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("Success");
  };

  return (
    <Fragment>
      <div container>
        <h7>Sign In here</h7>
        {/* {fullySignedUp && <div>You are now signed up and logged in!</div>} */}
        <form id="signin-form" onSubmit={(e) => onSubmit(e)}>
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

export default Login;
