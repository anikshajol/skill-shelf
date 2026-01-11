import React, { useContext } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext, ThemeContext } from "../Context/Context";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut, loading, search, setSearch } = useContext(AuthContext);
  // const [loading, setLoading] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
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
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                isActive ? "btn btn-accent" : "btn"
              }
            >
              Skill
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
                Dashboard
              </NavLink>
            </li>
          )}{" "}
          {user && (
            <li>
              <NavLink
                to={"/saved-skills"}
                className={({ isActive }) =>
                  isActive ? "btn btn-accent" : "btn "
                }
              >
                Saved Skills
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
          <div className="mr-2">
            <input
              type="text"
              className="input "
              required
              placeholder="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {!user ? (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          ) : (
            <Link onClick={handleLogOut} className="btn">
              Logout
            </Link>
          )}
          <div onClick={toggleTheme} className="px-2 cursor-pointer">
            {theme == "light" ? (
              <FaToggleOff size={30} />
            ) : (
              <FaToggleOn size={30} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
