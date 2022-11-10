import React, { useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const GoogleGitLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    setLoading(true);
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;

        console.log(user);
        toast.success("Login Sucessfull");
        const currentUser = {
          email: user.email,
        };
        fetch("http://localhost:5000/jwt", {
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

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(`${error}`);
      });
  };
  if (loading) {
    return (
      <div className="grid  content-center">
        <div className="w-16 h-16 mx-auto border-4  border-dashed rounded-full animate-spin dark:border-red-400"></div>
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="d-block w-50 mx-auto btn bg-blue-500 border border-primary mb-2"
      >
        <FcGoogle></FcGoogle>
        <span className="ms-2">Continue With Google</span>
      </button>
    </div>
  );
};

export default GoogleGitLogin;
