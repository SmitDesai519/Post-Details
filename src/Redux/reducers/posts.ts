import { PostActionTypes, PostState } from '../../Types'
import * as actionTypes from '../actionTypes'

const initialState: PostState = {
    posts: [],
    loading: false
}

export default function (state = initialState, action: PostActionTypes) {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_REQUEST:
            return { ...state, loading: true }
        case actionTypes.FETCH_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload.posts }
        case actionTypes.FETCH_POSTS_FAILED:
            return { ...state, loading: false }
        default:
            return state;
    }
}