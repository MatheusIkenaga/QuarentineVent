import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'
import logo from "../../images/logo.png"
import './logon.css'

export default function Logon(){

    const[user_email,setUser_email] = useState('')
    const[user_password,setUser_password] = useState('')
    const history = useHistory()


    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('api/checkLogin', {user_email, user_password})

            localStorage.setItem('user_id', response.data.user_id)
            history.push('timeline')

            console.log(response.data.name)
        }catch(err){
            alert('Falha no Login, tente novamente.')
        }

    }

    return(
        <div className="logon-container">
            <div className="form">
                <form onSubmit={handleLogin}>
                    <strong>Logon</strong>

                    <input placeholder="E-mail" type="email" value={user_email} onChange={e => setUser_email(e.target.value)}/>
                    <input placeholder="Password" type="password" value={user_password} onChange={e => setUser_password(e.target.value)}/>
                    <button type="submit">Join</button>
                    <Link className="Link">Register</Link>

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