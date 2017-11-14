import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

//we'll default our state to be an object
export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload.data); //which will return as an array of blog posts
            //goal is to change this array returned to us into an object ex: { 4: post }
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}