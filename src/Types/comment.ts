export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface CommentState {
    comments: Comment[];
    loading: boolean;
}

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'

interface FetchCommentsRequestAction {
    type: typeof FETCH_COMMENTS_REQUEST;
}

interface FetchCommentsSuccessAction {
    type: typeof FETCH_COMMENTS_SUCCESS;
    payload: {
        comments:Comment[]
    }
}

interface FetchCommentsFailedAction {
    type: typeof FETCH_COMMENTS_FAILED;
}

interface AddCommentSuccess {
    type: typeof ADD_COMMENT_SUCCESS
    payload:{
        comment:Comment
    }
}

export type CommentsActionTypes = FetchCommentsRequestAction | FetchCommentsSuccessAction | FetchCommentsFailedAction | AddCommentSuccess