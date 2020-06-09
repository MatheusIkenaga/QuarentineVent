import './styles.css'
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'
import logo from "../../images/logo.png"


export default function Logon(){

    const[user_nickname,setUser_nickname] = useState('')
    const[user_email,setUser_email] = useState('')
    const[user_password1,setUser_password1] = useState('')
    const[user_password2,setUser_password2] = useState('')
    const history = useHistory()


    async function handleRegister(e){
        e.preventDefault()
        if(user_password1===user_password2){
            try{
                const user_password = user_password1
                const response = await api.post('api/createLogin', {user_nickname, user_password,user_email})
                
                history.push('timeline')
    
                console.log(response.data.name)

                alert("Success!")
                history.push("/")
            }catch(err){
                alert('Fail to Logon, try again.')
            }
        }else if(user_password1!==user_password2){
            alert("Inconsistents password spaces")
        }        

    }

    return(
        <div className="register-container">
            <div className="formRegister">
                <form onSubmit={handleRegister}>
                    <strong>Register</strong>
                    <input placeholder="Nickname" type="text" value={user_nickname} onChange={e => setUser_nickname(e.target.value)}/>
                    <input placeholder="E-mail" type="email" value={user_email} onChange={e => setUser_email(e.target.value)}/>
                    <input placeholder="Password" type="password" value={user_password1} onChange={e => setUser_password1(e.target.value)}/>
                    <input placeholder="Confirm Password" type="password" value={user_password2} onChange={e => setUser_password2(e.target.value)}/>
                    <button type="submit">Create Account</button>
                    <Link className="LinkRegister" to="/">I already have an Account</Link>

                </form>
            </div>
            <div className="quarentine">
                <img className="logo" src={logo} alt="logo"/>
                <div className="text">
                    <p className="title">Quarentine Whisper</p>
                    <p className="description">Tell me what you feel</p>
                </div>
            </div>
        </div>
    )
}