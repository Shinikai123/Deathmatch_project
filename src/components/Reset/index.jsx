import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../../firebase.js";
import s from "./style.module.css";

function Reset() {

  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  console.log(auth);
<<<<<<< HEAD

  function handleClick() {
      navigate(-1)
  }
  return (
    <div className={s.wrapper}>
      <div className={s.reset_container}>
        <div className={s.reset}>
=======
  return (
    <div className={s.wrapper}>
      <div className={s.reset_container}>
>>>>>>> d8c3c2c72a46741cd637695a75784ba002d383c8
        <input
          type="text"
          className={s.reset_string}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address">
        </input>
        <button
          className={s.reset_button}
          onClick={() => sendPasswordResetEmail(email)}
        >
          Send password reset email
        </button>
        <button onClick={handleClick} className={s.reset_button}>Back</button>
        <div>
          Don't have an account? <Link to="/reg">Register</Link> now.
        </div>
        </div>
      </div>
    </div>
  );
}
export default Reset;