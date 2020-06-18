import './styles.css'
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiPower} from 'react-icons/fi'
import logo from "../../images/logo.png"
import api from '../../services/api'


export default function NewPost(){

    const user_id = localStorage.getItem('user_id')
    const [post_title, setPost_title] = useState([])
    const [post_description, setPost_description] = useState([])
    const history = useHistory()
    
    async function handleCreatePost(e){
        e.preventDefault()
        const data ={
            post_title,
            post_description
        }

        try{
            await api.post('api/post', data,{
                headers:{
                    Authorization: user_id
                }
            })
            history.push('/timeline')

        }catch(err){
            alert('Error to create post')
        }

    }

    function HandleLogout(){
        localStorage.clear()
        history.push('/')
    }

    return (

        <div className="Screen">
            <header className="header">

                <Link className="buttonHeader" to="/timeline">TimeLine</Link>

                <div className="centerLogo">
                    <img className="logo" src={logo} alt="logo"/>
                    <p>Quarentine Whisper</p>
                </div>

                <button onClick={HandleLogout} className="exitButton" type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <div className= "posts">
                <div className="leftSide">
                    <input placeholder="Search Posts" />
                </div>

                <div className="content">
                    <form className="formNewPost" onSubmit={handleCreatePost}>                                
                        <div className="inputTitle">
                            <input placeholder="Insert Title" onChange={e => setPost_title(e.target.value)}/>
                        </div>
                        <div className="inputDescription">
                            <textarea className="inputDescriptionForm" type="textarea" placeholder="Insert Description" onChange={e => setPost_description(e.target.value)}/>
                        </div>
                        <button className="submit" type="submit">Create Post</button>
                    </form>
                </div>
                <div className="rightSide">
                    <Link className="myPosts" to="/incidents/new">My Posts</Link>
                    <Link className="myProfile" to="/incidents/new">My Profile</Link>
                </div>
            </div>
            
        </div>
    )

}