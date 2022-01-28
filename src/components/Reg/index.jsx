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
  const [user, loading, error] = useAuthState(auth);
  const [nameDirty, setNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [nameError, setNameError] = useState('Имя не должно быть пустым')
  const [emailError, setEmailError] = useState('Емейл не должен быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не должен быть пустым')
  const [formValid, setFormValid] = useState(false)
  const [name, setName] = useState("");
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  useEffect(() =>{
    if (nameError || emailError || passwordError){
        setFormValid(false)
    }
    else {
        setFormValid(true)
    }
}, [nameError, emailError, passwordError])

const nameHandler = (e) => {
  setName(e.target.value)
  if(!e.target.value) {
    setNameError('Имя не должно быть пустым')
  }
  if(!e.target.value.length < 4 || e.target.value.length > 16) {
    setNameError('Имя должно быть длиннее 3 и короче 16')
  } else {
    setNameError('')
  }
}

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
        case 'name':
            setNameDirty(true)
            break
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
      <div className={s.reg_container}>
        <div className={s.reg}>
        <input onChange={e => nameHandler(e)}
          type="text"
          onBlur={e => blurHandler(e)}
          className={s.reg_string}
          name='name'
          id='name'
          value={name}
          placeholder="Full Name"
        />
        {(nameDirty && nameError) && <div className={s.error}>{nameError}</div>}

          <select id="selectRole" class={s.reg_string} name="Role">
            <option value="Player">Player</option>
            <option value="Organizer">Organizer</option>
          </select>

          <input onChange={e => emailHandler(e)}
           value={email}
            onBlur ={e => blurHandler(e)}
            name='email'
            id="email"
            type="text"
            className={s.reg_string}
            placeholder="E-mail Address"
            />
            {(emailDirty && emailError) && <div className={s.error}>{emailError}</div>}

            <input onChange={e => passwordHandler(e)}
           value={password}
            onBlur ={e => blurHandler(e)}
            name='password'
            id="password"
            type="text"
            className={s.reg_string}
            placeholder="Password"
          />
           {(passwordDirty && passwordError) && <div className={s.error}>{passwordError}</div>}
           <button disabled={!formValid} type='submit' className={s.reg_button}  onClick={register}>Register</button>
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
    </div>
  );
}
export default Register;