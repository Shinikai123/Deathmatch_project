import React from "react";
import { useNavigate } from 'react-router';
import s from "./style.module.css";


const Profile = () => {

  let navigate = useNavigate();
  function handleClick() {
      navigate(-1)
  }
    return (
        <div className={s.wrapper}>
            <div className={s.profile}>
            <h1>Deathmatch tournament app</h1>
            <h1>Your profile information</h1>
            <form >
            <input type="hidden" />
            <label>Name</label>
            <input type="text"  placeholder="Name" className={s.input_string}/>
            <label>Role</label>
            <input type="text"  placeholder="Role" className={s.input_string}/>
            <button type="submit" className={s.input_button}>Save</button>
            <button onClick={handleClick} className={s.input_button}>Back</button>
            </form>

            </div>
        </div>
    );
}

export default Profile;
