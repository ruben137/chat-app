import React from "react";
import { GoogleOutlined} from "@ant-design/icons";

import {auth} from '../firebase'
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>
          Welcome to <span style={{ color: "#4285f4" }}>My</span>
          <span style={{ color: "#3b5998" }}>Chat</span>
        </h2>
        <div 
        className="login-button google"
        onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <GoogleOutlined />
          Sign In with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
