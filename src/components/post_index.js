import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    render() {
        return (
            <div>
                Posts Index
            </div>
        )
    }
}

//because we're not passing map state to props
//below fetchPost object is same as: { fetchPosts: fetchPosts } (ES6)
export default connect(null, { fetchPosts })(PostsIndex);
