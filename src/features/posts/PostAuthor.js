import React from 'react'
import { selectUserById } from '../users/usersSlice'
import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) => selectUserById(state, userId))
  return <span>by {author ? author.name : 'Unknown author'}</span>
}
