import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../Redux/reducers/rootReducer";
import * as actions from "../../Redux/actions";
import { Row, Col, Button, Table, Modal, Input,message } from "antd";
import { Post, Comment } from "../../Types";
import { PlusOutlined } from "@ant-design/icons";

import "./Comments.scss";

const PostDetails = (props: any) => {
  const { commentDetails, posts, fetchComments, fetchPosts, addComments } =
    props;
  const [postComments, setPostComments] = useState<any>([]);
  const [postDetail, setPostDetail] = useState<Post>();
  const postId = +props.match.params.postId;
  const [openDialog, setOpenDialog] = useState(false);
  const [newComment, setNewComment] = useState({});
  const onAddComment = () => {
    setOpenDialog(true);
  };

  const onChangeHandler = (e: any) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const oncancel = () => {
    setOpenDialog(false);
  };

  const onSubmit = () => {
    if (
      Object.values(newComment).length < 3 ||
      Object.values(newComment).some((item) => item === "")
    ) {
      message.error("Please Fill all Details");
      return;
    }
    setOpenDialog(false);
    const payload = {
      ...newComment,
      id: commentDetails.length + 1,
      postId,
    };
    addComments(payload);
  };

  useEffect(() => {
    fetchComments();
    fetchPosts();
  }, [fetchComments,fetchPosts]);

  useEffect(() => {
    setPostComments(
      commentDetails?.filter((comment: Comment) => comment.postId === postId)
    );
  }, [commentDetails,postId]);

  useEffect(() => {
    setPostDetail(
      (posts && [...posts])?.find((post: Post) => post.id === postId)
    );
  }, [posts,postId]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "25%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "25%",
    },
    {
      title: "Description",
      dataIndex: "body",
      key: "body",
      width: "50%",
    },
  ];

  return (
    <>
      {postDetail && postComments && (
        <div className="Comments">
          <h2 className="page-title">Post Details</h2>
          <div className="site-card-border-less-wrapper">
            <div className="post-grid">
              <Row className="Title">
                <Col span={16}>
                  <b>Title: </b>
                  {postDetail.title}
                </Col>
              </Row>
              <Row className="Title">
                <Col span={16}>
                  <b>Description: </b>
                  {postDetail.body}
                </Col>
                <Col span={6}>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    size="large"
                    onClick={() => onAddComment()}
                  >
                    Add Comments
                  </Button>
                </Col>
              </Row>
            </div>
            <h2 style={{ margin: "10px 0" }}>Comments</h2>
            <Table
              columns={columns}
              dataSource={postComments}
              className="table-container"
            />
            <Modal
              title="Add Comments"
              visible={openDialog}
              onOk={() => onSubmit()}
              onCancel={() => oncancel()}
              destroyOnClose={true}
            >
              <Input
                placeholder="Enter name"
                name="name"
                onChange={(e) => onChangeHandler(e)}
                style={{ margin: "10px 0" }}
              />
              <Input
                placeholder="Enter email"
                type="email"
                name="email"
                onChange={(e) => onChangeHandler(e)}
                style={{ margin: "10px 0" }}
              />
              <Input
                placeholder="Enter Description"
                name="body"
                onChange={(e) => onChangeHandler(e)}
                style={{ margin: "10px 0" }}
              />
            </Modal>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    commentDetails: state.comments?.comments,
    posts: state.posts?.posts,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchComments: () => dispatch(actions.fetchComments()),
    fetchPosts: () => dispatch(actions.fetchPosts()),
    addComments: (payload: Comment) => dispatch(actions.addComments(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
