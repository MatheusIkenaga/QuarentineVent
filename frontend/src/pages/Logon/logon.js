import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'
import logo from "../../images/logo.png"
import './logon.css'

export default function Logon(){


    return(
        <div className="logon-container">
            <div className="form">
                <form onSubmit="">
                    <strong>Logon</strong>

                    <input placeholder="E-mail" type="email"/>
                    <input placeholder="Password" type="password"/>
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