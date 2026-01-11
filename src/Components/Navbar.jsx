import React, { useContext } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/Context";
import Loader from "./Loader";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const link = (
    <>
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "btn btn-accent" : "btn "
              }
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Home"
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                isActive ? "btn btn-accent" : "btn"
              }
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Skill"
              )}
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  isActive ? "btn btn-accent" : "btn "
                }
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Dashboard"
                )}
              </NavLink>
            </li>
          )}
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoIosMenu size={30} />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 gap-2 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            Skills Shelf
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">{link}</ul>
        </div>

        <div className="navbar-end">
          {!user ? (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          ) : (
            <Link onClick={handleLogOut} className="btn">
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
