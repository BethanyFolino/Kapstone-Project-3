import React from "react";
import { Link } from "react-router-dom";

const Base = () => {
  return (
    <section>
      <div>
        <h1>Welcome to Jacob and Bethany's project</h1>
      </div>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </section>
  );
};

export default Base;
