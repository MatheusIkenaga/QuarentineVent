import React from 'react'
import {Link} from 'react-router-dom'
import {FiPower,FiTrash2} from 'react-icons/fi'
import logo from "../../images/logo.png"

import './styles.css'

export default function(){
    return (
        <div className="Screen">
            <header className="header">

                <Link className="buttonHeader" to="/incidents/new">Create a Post</Link>

                <div className="centerLogo">
                    <img className="logo" src={logo} alt="logo"/>
                    <p>Quarentine Whisper</p>
                </div>

                <button className="exitButton" type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <div className= "posts">
                <div className="leftSide">
                    <input placeholder="Search Posts" />
                </div>

                <div className="content">

                    <ul>
                        <li>
                            <button type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                            <h1>My secret is...</h1>
                            <p>I sell my body to buy cheeseburguer</p>

                            
                            <div className="inputComment">
                                <input placeholder="Comment Here"/>
        
                            </div>
                            <div className="comments">
                                <ul>
                                    <li>Comment 1</li>
                                    <li>Comment 2</li>
                                </ul>
                            </div>
                            

                        </li>
                        <li>
                            <button type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                            <h1>My secret is...</h1>
                            <p>I sell my body to buy cheeseburguer</p>

                            
                            <div className="inputComment">
                                <input placeholder="Comment Here"/>
        
                            </div>
                            <div className="comments">
                                <ul>
                                    <li>Comment 1</li>
                                    <li>Comment 2</li>
                                </ul>
                            </div>
                            

                        </li>
                        
                    </ul>
                </div>
                <div className="rightSide">
                    <Link className="myPosts" to="/incidents/new">My Posts</Link>
                    <Link className="myProfile" to="/incidents/new">My Profile</Link>
                </div>
            </div>
            
        </div>
    )
}