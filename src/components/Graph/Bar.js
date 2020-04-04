import React from 'react';
import { Star } from '../../styled-components/form';
import { BarWrapper, BarContent, BarBorder } from './../../styled-components/graph'


export default ({value, percentage}) => {
  return (
  <BarWrapper>
    <span>{ value } <Star/></span>
    <BarBorder>
      <BarContent percentage={percentage}/>
    </BarBorder>
  </BarWrapper>
)}
