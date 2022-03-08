import axios from 'axios'
import { AppThunk } from '../store'
import { Comment, CommentsActionTypes } from '../../Types';
import { ADD_COMMENT_SUCCESS, FETCH_COMMENTS_FAILED, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from '../actionTypes';


export function fetchCommentsRequest(): CommentsActionTypes {
    return {
        type: FETCH_COMMENTS_REQUEST,
    };
}

export function fetchCommentsSuccess(
    comments: Comment[],
): CommentsActionTypes {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: {
            comments,
        },
    };
}

export function fetchCommentsFailed(): CommentsActionTypes {
    return {
        type: FETCH_COMMENTS_FAILED,
    };
}

export const fetchComments = (): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchCommentsRequest());
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        dispatch(fetchCommentsSuccess(response.data));
    } catch (error) {
        dispatch(fetchCommentsFailed());
    }
};

export const addComments = (payload:Comment): AppThunk => async (dispatch) => {
    dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: {
            comment:payload
        }
    });
}