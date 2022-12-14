import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import GoogleGitLogin from "../Shared/GoogleGitLogin/GoogleGitLogin";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useTitle("Login");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setLoading(true);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login sucessfull");

        const currentUser = {
          email: user.email,
        };

        console.log(currentUser);
        //get jwt token
        fetch("https://shutter-up-server-mu.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("shutterUp-Token", data.token);
            navigate(from, { replace: true });
          });

        form.reset();
        setLoading(false);
      })
      .catch((error) => {
        toast.error(`${error}`);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="grid min-h-screen content-center">
        <div className="w-16 h-16 mx-auto border-4  border-dashed rounded-full animate-spin dark:border-red-400"></div>
      </div>
    );
  }
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
