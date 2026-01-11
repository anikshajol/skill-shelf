import React from "react";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset">
            {/* userName */}
            <label className="label">Username</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Username"
            />
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input"
              placeholder="Email"
            />
            {/* password filed */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
