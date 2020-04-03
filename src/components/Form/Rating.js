import React from 'react'
import { Star, RatingWrapper } from './../../styled-components/form'

export default (props) => {
  const rates = [5, 4, 3, 2, 1];

  const handleSetRate = (value) => {
    if(!props.setRate) return
    props.setRate({target: {name: 'rate', value}})
  }
  return <RatingWrapper>
    { rates.map(value => (
        <Star
          key={value} 
          className={value <= props.currentRate ? 'selected': '' } 
          onClick={() => handleSetRate(value)}
        />) )}
  </RatingWrapper>
}