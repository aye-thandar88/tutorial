import React, { useState } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/userSlice";
import { SubHeading } from "../../components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error,setError] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addHandler = (e) => {
    e.preventDefault();

    //dispatch(add({ name, email, password }));

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/');
        // ...
      })
      .catch((error) => {
        setError(true)
      });
  };

  return (
    <div className="app__login section__padding" id="login">
      <h1 className="headtext__cormorant">Log in</h1>
      <SubHeading />

      <div className="app__login-input">
        {/* <div className="app__login-input_name">
          <label className="p__opensans">Name</label>
          <input
            type="text"
            placeholder="Enter your user name"
            onChange={(e) => setName(e.target.value)}
          />
        </div> */}
        <div className="app__login-input_email">
          <label className="p__opensans">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="app__login-input_password">
          <label className="p__opensans">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {error && <span style={{color:'red'}}>Please login with correct email and password</span>}
      <div>
        <button
          type="submit"
          className="custom__button"
          style={{ marginTop: "2rem" }}
          onClick={addHandler}
        >
          Submit
        </button>
      </div>
      
    </div>
  );
};

export default Login;
