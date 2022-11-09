import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import GoogleGitLogin from "../Shared/GoogleGitLogin/GoogleGitLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login sucessfull");
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };
  return (
    <div className="hero    mx-auto my-4 ">
      <div className="hero-content  gap-20 flex justify-center   md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center  lg:text-left">
          <img className="w-3/4" src={login} alt="" />
        </div>
        <div className="card w-100  flex-shrink-0   max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            New to Shutter Up{" "}
            <Link className="text-orange-600 font-bold" to="/register">
              Register
            </Link>{" "}
          </p>
          <p className="text-center font-bold mt-4">OR</p>
          <div className="text-center">
            <GoogleGitLogin></GoogleGitLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
