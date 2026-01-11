import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/Context";
// import toast from "react-hot-toast";

const Register = () => {
  const { signUpUser, updateUser, loading } = useContext(AuthContext);

  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);
    setError("");
    try {
      signUpUser(email, password)
        .then((res) => {
          console.log(res.user);
          const profile = { displayName: name };
          updateUser(profile)
            .then(() => {
              // profile Update
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message == "Firebase: Error (auth/email-already-in-use).") {
            setError("Email Already Registered");
            // toast.error("Email Already Registered");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
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
              onChange={() => setError("")}
            />
            {/* password filed */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-primary">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "SignUp"
              )}
            </button>
          </form>
          <div className="text-xl text-error">{error}</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
