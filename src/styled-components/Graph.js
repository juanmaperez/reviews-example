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