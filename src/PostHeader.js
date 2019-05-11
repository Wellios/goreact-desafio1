/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <Fragment>
    <header className="postHeader">
      <img className="avatar" src={props.avatar} alt="Imagem de perfil" />
      <div>
        <strong>{props.name}</strong>
        <p>{props.time}</p>
      </div>
    </header>
  </Fragment>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
