import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostList from './containers/post-list'
import PostFrom from './containers/post-form'
import Post from './containers/post'
import NotFound from './components/not-found'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PostList}/>
                    <Route path="/create-post" component={PostFrom}/>
                    <Route path="/posts/:id" component={Post}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes