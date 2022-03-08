import { CommentsActionTypes, CommentState } from '../../Types'
import * as actionTypes from '../actionTypes'

const initialState: CommentState = {
    comments: [],
    loading: false,
}

export default function (state = initialState, action: CommentsActionTypes) {
    switch (action.type) {
        case actionTypes.FETCH_COMMENTS_REQUEST:
            return { ...state, loading: true }
        case actionTypes.FETCH_COMMENTS_SUCCESS:
            return { ...state, loading: false, comments: action.payload.comments }
        case actionTypes.FETCH_COMMENTS_FAILED:
            return { ...state, loading: false }
        case actionTypes.ADD_COMMENT_SUCCESS:
            return { ...state, comments: [...state.comments,action.payload.comment] }
        default:
            return state;
    }
}