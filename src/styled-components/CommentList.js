import styled from 'styled-components'

export const CommentListWrapper = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  box-sizing: border-box;
`

export const ItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 4px 8px 2px rgba(0,0,0,.06);
  * {margin: 5px 0;}
  p {
    color: #999;
  }
`