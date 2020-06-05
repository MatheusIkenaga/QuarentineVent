import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiPower,FiTrash2} from 'react-icons/fi'
import logo from "../../images/logo.png"
import api from '../../services/api'
import './styles.css'

export default function Timeline(){
    const user_id = localStorage.getItem('user_id')
    const [comment_description, setComment_description] = useState([])
    const [post_id_comment, setPost_id_comment] = useState([])
    const [posts, setPosts] = useState([])
    const history = useHistory()
    
    useEffect(()=> {
        
        api.get('api/post').then(response =>{
            setPosts(response.data)
        })
        
    })

    function HandleLogout(){
        localStorage.clear()
        history.push('/')
    }

    async function HandleCreateComment(e){
        e.preventDefault()
        e.target.reset()
        const post_id = post_id_comment
        const data={
            comment_description,
            post_id
        }

        try{
            await api.post('api/post/comment', data,{
                headers:{
                    Authorization: user_id
                }
            })
            history.push('/timeline')

        }catch(err){
            alert('Error to create comment')
        }
        
    }

    return (

        <div className="Screen">
            <header className="header">

                <Link className="buttonHeader" to="/newPost">Create a Post</Link>

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

                    <ul>
                        {posts.map(post => (
                            <li key ={post.post_id}>
                                
                                <button type="button">
                                    <FiTrash2 size={20} color="#a8a8b3" />
                                </button>
                                <h1>{post.post_title}</h1>
                                <p>{post.post_description}</p>

                                
                                <div className="inputComment">
                                    <form onSubmit={HandleCreateComment} >
                                        <input placeholder="Comment Here" 
                                        onChange={(e => setComment_description(e.target.value, setPost_id_comment(post.post_id)))}
                                        
                                        />
                                        
                                    </form>
                                </div> 
                                <div className="comments">
                                    <ul>
                                        {post.comments.map(comment =>
                                        <li key={comment.comment_id}>{comment.comment_description}</li>
                                        )}
                                    </ul>
                                </div>
                            </li>
                        ))}
                        
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