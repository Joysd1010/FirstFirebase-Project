import React from "react";
import { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import UserCard from "../UserCard/UserCard";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvider= new GithubAuthProvider()
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const LoggedUser = result.user;
        setUser(LoggedUser);
      
      })
      .catch((error) => {
        console.log("error", error.message);
      });
      console.log(user)
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const LoggedUser = result.user;
        setUser(LoggedUser);
        
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleSignOut=()=>{
    console.log ("The user is no more")
    signOut(auth)
    .then(result=>{

        setUser(null)
    })
    .catch(error=>{
        console.log("error",error.message)
    })
  }

  return (
    <div>
      Log in here
      <div className="grid grid-cols-1 gap-4">
        {! user?<div><button className="btn btn-secondary" onClick={handleGoogleLogin}>Sign in Google</button><button className="btn btn-warning mx-2" onClick={handleGithubLogin}>Sign in Github</button></div>:
        <button className="btn btn-accent " onClick={handleSignOut}>  Sign Out   </button>}
      </div>
      {user && (
        <div>
            {console.log(user)}
          <UserCard user={user}></UserCard>
        </div>
      )}
    </div>
  );
};

export default Login;
