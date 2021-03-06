import styled from 'styled-components'

export const GraphWrapper = styled.div`
  padding: 10px 10px;
  box-sizing: border-box;
  width: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  @media(max-width:600px){
    width: 100%;
  }
  .average {
    font-size: 92px;
    font-weight: bold;
  }
`

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
