import React from 'react'

export const SinglePostTitle = props => {
    return (
<div className="post-preview">
            <a href="">
                <h2 className="post-title">{props.posts.name}</h2>
                <h3 className="post-subtitle">{props.posts.email}</h3>
            </a>
            <p className="post-meta">Posted by&nbsp;<a href="#">Writer on 2041/62/20</a></p>
        </div>
    );
}

