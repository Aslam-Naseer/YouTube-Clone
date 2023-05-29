import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";

const Loginscreen = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.accessToken);
  useEffect(() => {
    if (authStatus) navigate("/");
  }, [authStatus, navigate]);

  const handler = () => {
    dispatch(login());
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
