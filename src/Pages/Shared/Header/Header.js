import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../../../assets/logo.jpg";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut Sucessfull");
      })
      .catch((error) => console.error(console.error()));
  };

  const manuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/myreviews">My Reviews</Link>
          </li>
          <li>
            <Link to="/addservices">Add Service</Link>
          </li>
          <li>
            <Link>{user?.displayName}</Link>
          </li>

          <NavLink className="mx-2">
            {user?.photoURL ? (
              <img
                style={{ height: "40px" }}
                className="rounded-full mx-4 border border-gray-100 shadow-sm"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <FaUser></FaUser>
            )}
          </NavLink>
          <li>
            <Link onClick={handleLogOut}>Logout</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar w-full bg-sky-400  ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {manuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-12 h-10" src={logo} alt="" />
          <p className="ml-2">Shutter Up</p>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal  font-bold p-0">{manuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
