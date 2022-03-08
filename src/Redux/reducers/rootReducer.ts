import { combineReducers } from 'redux';

import PostReducer from './posts'
import CommentReducer from './comments'
import {PostState,CommentState} from '../../Types'


export interface RootState {
    posts?: PostState;
    comments?: CommentState;
}

const rootReducer = combineReducers({
    posts: PostReducer,
    comments: CommentReducer
});

export default rootReducer;