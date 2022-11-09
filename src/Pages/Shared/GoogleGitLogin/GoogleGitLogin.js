import React, { useContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const GoogleGitLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Sucessfull");
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };
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
