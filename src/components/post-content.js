import React from 'react';
import { Link } from 'react-router-dom';

const PostContent = ({post}) => {
        return (
            <div>
                <h2 className="display-4">{post.title}</h2>
                <blockquote className="blockquote">
                    <p className="{post.author}">{post.content}</p>
                    <footer className="blockquote-footer">Auteur : <cite>{post.author}</cite></footer>
                </blockquote>
            </div>
        )
}

export default PostContent

