import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";

const GoogleGitLogin = () => {
  return (
    <div>
      <button className="d-block w-50 mx-auto btn bg-blue-500 border border-primary mb-2">
        <FcGoogle></FcGoogle>
        <span className="ms-2">Continue With Google</span>
      </button>
      <button className="d-block w-50 mx-auto btn bg-blue-500 border  border-warning mb-2">
        <FiGithub></FiGithub>
        <span className="ms-2">Continue With Github</span>
      </button>
    </div>
  );
};

export default GoogleGitLogin;
