import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = (props) => {
    const {post} = props
    return (
        <tr>
            <td><Link to={`/posts/${post.id}`}>{post.title}</Link></td>
            <td><button className="btn btn-danger" onClick={() => deletePost(post)}>Supprimer</button></td>
        </tr>
    )

    function deletePost(post) {
        console.log(props)
        props.deletePostCallBack(post)
    }
}

export default PostListItem;