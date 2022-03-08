import axios from 'axios'
import { AppThunk } from '../store'
import { Post, PostActionTypes } from '../../Types';
import { FETCH_POSTS_FAILED, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from '../actionTypes';


export function fetchPostsRequest(): PostActionTypes {
    return {
        type: FETCH_POSTS_REQUEST,
    };
}

export function fetchPostsSuccess(
    posts: Post[],
): PostActionTypes {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: {
            posts,
        },
    };
}

export function fetchPostsFailed(): PostActionTypes {
    return {
        type: FETCH_POSTS_FAILED,
    };
}

export const fetchPosts = (): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchPostsRequest());
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
        dispatch(fetchPostsFailed());
    }
};