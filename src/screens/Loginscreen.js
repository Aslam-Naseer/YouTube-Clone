import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import "../styles/login-screen.css";

const Loginscreen = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (authStatus) navigate("/");
  }, [authStatus, navigate]);

  const handler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);
    } catch (error) {
      alert("Login failed!");
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Youtube Clone</h2>
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="logo"
        />
        <button onClick={handler}>Login With google</button>
        <p>This Project is made using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default Loginscreen;
