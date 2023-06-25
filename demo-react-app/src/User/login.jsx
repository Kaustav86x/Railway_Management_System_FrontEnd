import React from "react";
import "./login.css";

export const login = () => {
  return (
    <div className="login">
      <div className="div">
        {/* <img className="rectangle" alt="Rectangle" src="" /> */}
        <div className="overlap">
          <h1 className="text-wrapper">Welcome</h1>
          <div className="text-wrapper-2">Login to your account</div>
        </div>
        <div className="text-wrapper-3">Email</div>
        <div className="text-wrapper-4">Password</div>
        <div className="text-wrapper-5">Forgot Password?</div>
        <div className="group">
          <div className="text-wrapper-6">Create Now</div>
          <div className="text-wrapper-7">Don’t have account?</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-8">Email</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-9">Password</div>
          {/* <img className="img" alt="Group" src="group-8.png" /> */}
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-10">Login</div>
        </div>
        {/* <img className="group-2" alt="Group" src="group-113.png" />
        <img className="facebook" alt="Facebook" src="facebook-1.png" />
        <img className="instagram" alt="Instagram" src="instagram.png" /> */}
      </div>
    </div>
  );
};
