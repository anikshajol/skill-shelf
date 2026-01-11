import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/Context";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import Loader from "../Components/Loader";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { loginUser, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user);

  // console.log(name);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // setError("");
    setLoading(true);
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login successfully");
        setLoading(false);
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message == "Firebase: Error (auth/invalid-credential).") {
          setError("Email/Password not matched");
        }
      });
  };
  // if (loading) return <Loader />;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              onChange={() => setError("")}
            />

            {/* password */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="input relative"
                placeholder="Password"
                name="password"
                onChange={() => setError("")}
              />

              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2/4 right-8  bottom-2/4"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div>
            <span className="text-xl text-error">{error && error} </span>
          </div>
          <div>
            <span>Haven't register yet? </span>
            <Link
              to={"/register"}
              className="link font-bold text-primary link-hover"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
