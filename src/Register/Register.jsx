import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase/firebase.init";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const auth=getAuth(app)
  // const hamdleEmail=(event)=> {
  //     console.log(event.target.value)
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
const email=event.target.email.value
const pass=event.target.password.value
    createUserWithEmailAndPassword(auth,email,pass)
    .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser)
    })
    .catch(error=>{
        console.log(error.message)
    })
   
    
    
   
  };

  return (
    <div>
      Enter user name , email , and password to sign up
      <div>
        <form className="grid grid-cols-1" onSubmit={handleSubmit}>
          <input
            type="email" name="email" id="email"
            placeholder="Your email here"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            type="password" name="password" id="password"
            placeholder="Your Password"
            className="input input-bordered input-warning w-full max-w-xs"
          />

          <input
            type="submit" name="submit"
            value="register"
            className="input input-bordered input-warning w-full max-w-xs bg-yellow-400"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
