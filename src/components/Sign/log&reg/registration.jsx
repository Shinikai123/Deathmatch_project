
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import s from './style.module.css';


const Reg = () => {

    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nicknameDirty, setNicknameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [nicknameError, setNicknameError] = useState('Никнейм не должен быть пустым')
    const [emailError, setEmailError] = useState('Емейл не должен быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не должен быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() =>{
        if (emailError || passwordError){
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const nicknameHandler = (e) => {
        setNickname(e.target.value)
        if (e.target.value.length < 4 || e.target.value.length > 16) {
            setNicknameError('Никнейм должен быть длиннее 3 и короче 16')
        } else {
            setNicknameError('')
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
            case 'nickname':
                setNicknameDirty(true)
            break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }


        let navigate = useNavigate();
        function handleClick() {
            navigate(-1)
        }
        
    return (
        <div className={s.wrapper}>
            <form className={s.form}>
                    <h1>It's time to name yourself!</h1>
                <div className={s.input_container}>
                    <input onChange={e => nicknameHandler(e)} value={nickname} onBlur ={e => blurHandler(e)} name='nickname' className={s.input_string} id="nickname" type="text" placeholder="Enter your nickname..."></input>
                    {(nicknameDirty && nicknameError) && <div className={s.error}>{nicknameError}</div>}
                    <input onChange={e => emailHandler(e)} value={email} onBlur ={e => blurHandler(e)} name='email' className={s.input_string} id="email" type="text" placeholder="Enter your email..."></input>
                    {(emailDirty && emailError) && <div className={s.error}>{emailError}</div>}
                    <input onChange={e => passwordHandler(e)} value={password} onBlur ={e => blurHandler(e)} name='password' className={s.input_string} id="password" type="text" placeholder="Enter your password..."></input>
                    {(passwordDirty && passwordError) && <div className={s.error}>{passwordError}</div>}
                </div>
                    <button disabled={!formValid} type='submit' className={s.input_button}>Submit</button>
                    <button onClick={handleClick} className={s.input_button}>Back</button>
            </form>
        </div>
    );
}

export default Reg;