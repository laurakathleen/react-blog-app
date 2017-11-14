import axios from 'axios';
//this file is our action creator (gets data from our api, stores it in request, and redux-promise puts this in our payload to load when it's time

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=randomstring1234'

//fetch posts from our blog api
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}