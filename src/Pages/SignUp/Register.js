import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import register from "../../assets/images/register.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import GoogleGitLogin from "../Shared/GoogleGitLogin/GoogleGitLogin";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle("Register");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    setLoading(true);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
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

        console.log(user);
        toast.success("Registration Successfull ");
        form.reset();
        handleUpdateUser(name, photoURL);
        form.reset();
        setLoading(false);
      })
      .catch((error) => {
        toast.error(`${error}`);
        setLoading(false);
      });
  };
  const handleUpdateUser = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  if (loading) {
    return (
      <div className="grid min-h-screen content-center">
        <div className="w-16 h-16 mx-auto border-4  border-dashed rounded-full animate-spin dark:border-red-400"></div>
      </div>
    );
  }
  return (
    <div className="hero w-full my-20">
      <div className="hero-content  gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center  lg:text-left">
          <img className="w-3/4" src={register} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
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
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
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

export default Register;
