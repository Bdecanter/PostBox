import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { readAllPost, deletePost } from '../actions'
import PostListItem from "../components/post-list-item"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'

class PostList extends Component {

    componentWillMount() {
        this.props.readAllPost()
    }

    renderPosts() {
        const {posts} = this.props
        if(posts) {
            return posts.map((post) => {
                return (
                    <CSSTransition key={post.id} timeout={500} classNames="item">
                        <PostListItem key={post.id} post={post} deletePostCallBack={(post) => this.deletePostCallBack(post)}/>
                    </CSSTransition>
                )
            })
        }
    }

    deletePostCallBack(post) {
        this.props.deletePost(post.id)
    }

    render() {
        return (
            <div>
                <h1 className="display-4">Listes des posts</h1>
                <div className="button_add">
                    <Link to={"create-post"}><button className="btn btn-primary btn-circle btn-lg">+</button></Link>
                </div>
                <table className="table table-hover tableau">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <TransitionGroup component="tbody">
                            {this.renderPosts()}    
                    </TransitionGroup>
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
    ...bindActionCreators({readAllPost, deletePost}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);