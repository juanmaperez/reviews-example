import React from 'react'
import CommentItem from './../CommentItem/CommentItem'

export default ({commentList}) => {
  return commentList && commentList.length > 0
  ? commentList.map((item, i) => <CommentItem key={i} item={item}/>) 
  : <p>No comments</p>
}