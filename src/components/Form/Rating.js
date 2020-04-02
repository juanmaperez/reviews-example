import React from 'react'
import { Star, RatingWrapper } from './../../styled-components/form'

export default ({currentRate, setRate}) => {
  const rates = [5, 4, 3, 2, 1];

  return <RatingWrapper>
    { rates.map(value => (
        <Star 
          className={value <= currentRate ? 'selected': '' } 
          onClick={() => setRate({target: {name: 'rate', value}})}
        />) )}
  </RatingWrapper>
}