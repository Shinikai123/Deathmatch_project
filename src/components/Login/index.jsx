import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import s from "./style.module.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState('Емейл не должен быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не должен быть пустым')
  const [formValid, setFormValid] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);



  useEffect(() =>{
      if (emailError || passwordError){
          setFormValid(false)
      }
      else {
          setFormValid(true)
      }
  }, [emailError, passwordError])

  const emailHandler = (e) => {
      setEmail(e.target.value)
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!re.test(String(e.target.value).toLowerCase())) {
          setEmailError('Некорректный адрес эл.почты')
      } else {
          setEmailError("")
      }

  }

  const passwordHandler = (e) => {
      setPassword(e.target.value)
      if (!e.target.value) {
          setPasswordError('Пароль не должен быть пустым')
      }
      if (e.target.value.length < 4 || e.target.value.length > 16) {
          setPasswordError('Пароль должен быть длиннее 3 и короче 16')
      } else {
          setPasswordError('')
      }
  }


  const blurHandler = (e) => {
      switch (e.target.name) {
          case 'email':
              setEmailDirty(true)
              break
          case 'password':
              setPasswordDirty(true)
              break
      }
  }


  return (
    <div className={s.wrapper}>
      <div className={s.login_container}>
        <div className={s.login}>
      <input onChange={e => emailHandler(e)}
          value={email}
          onBlur ={e => blurHandler(e)}
          name='email'
          id="email"
          type="text"
          className={s.login_string}
          placeholder="E-mail Address"
          />
          {(emailDirty && emailError) && <div className={s.error}>{emailError}</div>}

          <input onChange={e => passwordHandler(e)}
           value={password}
          onBlur ={e => blurHandler(e)}
          name='password'
          id="password"
          type="password"
          className={s.login_string}
          placeholder="Password"
          />
           {(passwordDirty && passwordError) && <div className={s.error}>{passwordError}</div>}

        <button
          disabled={!formValid}
          className={s.login_button}
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className={s.login_button} onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/reg">Register</Link> now.
        </div>
        </div>
      </div>
    </div>
  );
}
export default Login;