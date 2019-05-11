/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = props => (
  <article className="post">
    <PostHeader name={props.data.name} time={props.data.time} avatar={props.data.avatar} />
    <p>{props.data.post}</p>
  </article>
);

Post.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
