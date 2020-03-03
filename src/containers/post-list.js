import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { readAllPost } from '../actions'
import PostListItem from "../components/post-list-item"

class PostList extends Component {

    componentDidMount() {
        this.props.readAllPost()
    }

    renderPosts() {
        const {posts} = this.props
        if(posts) {
            return posts.map((post) => {
                return <PostListItem key={post.id} post={post}/>
            })
        }
    }

    render() {
        console.log(this.props.posts)
        return (
            <div>
                <h1 className="display-4">Listes des posts</h1>
                <table className="table table-hover tableau">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPosts()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readAllPost}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);