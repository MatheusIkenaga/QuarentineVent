import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NewPost from './pages/NewPost/newPost'
import Timeline from './pages/Timeline'
import Logon from './pages/Logon/logon'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/newPost" component={NewPost}/>
                <Route path="/timeline" component={Timeline}/>
                <Route path="/" component={Logon}/>
            </Switch>
        </BrowserRouter>
    )
}
