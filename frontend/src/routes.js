import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NewPost from './pages/NewPost'
import Timeline from './pages/Timeline'
import Logon from './pages/Logon'
import Register from './pages/Register'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/timeline" component={Timeline}/>
                <Route path="/register" component={Register}/>
                <Route path="/newPost" component={NewPost}/>
            </Switch>
        </BrowserRouter>
    )
}
