import React from 'react'
import { ItemWrapper } from './../../styled-components/commentList'
import Rating from '../../components/Form/Rating'

export default ({ item }) => {
  return (
  <ItemWrapper>
    <div>
      <strong>{ item.name }</strong>
      <p>{ item.comment }</p>
    </div>
    <Rating currentRate={item.rate} />
  </ItemWrapper>
)}