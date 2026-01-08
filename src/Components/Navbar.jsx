import React from "react";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-accent"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "btn btn-primary" : "btn")}
        >
          Skill
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "btn btn-primary" : "btn")}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Logout</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
