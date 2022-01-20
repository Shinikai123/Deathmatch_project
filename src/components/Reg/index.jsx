import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase.js";
import s from "./style.module.css";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);
  return (
    <div className={s.wrapper}>
      <div className={s.reg_container}>
        <input
          type="text"
          className={s.reg_string}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
                    <select id="selectRole" class={s.reg_string} name="Role">
                        <option value="Player">Player</option>
                        <option value="Organizer">Organizer</option>
                    </select>
        <input
          type="text"
          className={s.reg_string}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className={s.reg_string}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className={s.reg_button} onClick={register}>
          Register
        </button>
        <button
          className={s.reg_button}
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;