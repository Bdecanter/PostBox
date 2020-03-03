import React, { Component } from 'react'
import PostContent from '../components/post-content'

class Post extends Component {
    render() {
        console.log(this.props)
        
        return (
            <div>
                {this.props.match.params.id}
                <PostContent/>
            </div>
        )
    }
}

export default Post;