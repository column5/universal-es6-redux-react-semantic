'use strict'

import React, { Component, PropTypes } from 'react'

const PostDetails = ({ post }) => (
  <div>
    <h2 className="ui header">{ post.title }</h2>
    <p>{ post.body }</p>
  </div>
)

export default PostDetails
