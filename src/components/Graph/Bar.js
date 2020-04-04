import React from 'react';
import { Star } from '../../styled-components/form';

import styled from 'styled-components'

export const BarWrapper = styled.div`
  width: 100%;
  margin: 5px 0px;
  display: flex;
  span {
    display: flex;
    align-items: center;
  }
`


export const BarBorder = styled.div`
  margin: 10px 0;
  width: 90%;
  background: #efefef;
  border-radius: 5px;
  height: 10px;
`

export const BarContent = styled.div`
  width: ${({percentage}) => percentage ? percentage : 0}%;
  background: #71c5bd;
  border-radius: 5px;
  height: 10px;
  transition: width 1s linear;
`



export default ({value, percentage}) => {
  return (
  <BarWrapper>
    <span>{ value } <Star/></span>
    <BarBorder>
      <BarContent percentage={percentage}/>
    </BarBorder>
  </BarWrapper>
)}
