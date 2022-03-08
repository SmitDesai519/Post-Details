import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from 'antd'
import * as actions from '../../Redux/actions'
import { RootState } from '../../Redux/reducers/rootReducer'
import './Posts.scss'
import { Post } from '../../Types'

const Posts = (props:any) => {
    const posts = useSelector((state: RootState) => state.posts?.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.fetchPosts())
    }, [])

    const onPostClick = (post: Post) => {
        props.history.push(`/post/${post.id}`)
    }

    const columns = [
        {
            title: 'Sr. No.',
            dataIndex: 'id',
            key: 'id',
            width: '15%'
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            width: '35%'
        },
        {
            title: 'Description',
            dataIndex: 'body',
            key: 'body',
            width: '50%'
        }
    ]
    return (
        <div className="posts">
            <h2 className="page-title">Posts Details</h2>
            <Table columns={columns} dataSource={posts} className="table-container" scroll={{ x: 1200, y: 460 }}
                onRow={(record) => {
                    return {
                        onClick: () => onPostClick(record),
                    };
                }} />
        </div>
    )
}

export default Posts