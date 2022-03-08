export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export interface PostState {
    posts: Post[];
    loading: boolean;
}

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';

interface FetchPostRequestAction {
    type: typeof FETCH_POSTS_REQUEST;
}

interface FetchPostSuccessAction {
    type: typeof FETCH_POSTS_SUCCESS;
    payload: {
        posts:Post[]
    }
}

interface FetchPostFailedAction {
    type: typeof FETCH_POSTS_FAILED;
}

export type PostActionTypes = FetchPostRequestAction | FetchPostSuccessAction | FetchPostFailedAction