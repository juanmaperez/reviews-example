import styled from 'styled-components'

export const FormTitle = styled.h3`
  color: #71c5bd;
  font-size: 22px;
  @media(max-width: 480px){
    font-size: 16px;
    padding: 0px 20px;
  }
`

export const FormWrapper = styled.form`
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
`

export const FieldsetWrapper = styled.div`
  display: flex;
  border: 0px;
  padding: 0px;
  width: 100%;
  margin: 5px 0px;
  position: relative;
  flex-direction: column;
  small {
    position: absolute;
    bottom: -18px;
    right: 10px;
  }
  input, select {
    flex: 1;
    margin: 5px;
    padding: 15px;
    font-size: 14px;
    border: 2px solid #71c5bd;
    background: #ffffff;
    border-radius: 5px;
    color:#333;
    min-height: 20px !important;
    line-height: 20px !important;
    option {
      color:#333 !important;
    }
  }
  textarea {
    flex: 1;
    margin: 5px;
    padding: 15px;
    font-size: 14px;
    border: 2px solid #71c5bd;
    background: #ffffff;
    border-radius: 5px;
    color:#333;
  }
  @media(max-width: 570px){
    padding: 0 10px;
    box-sizing: border-box;
    flex-direction: column;
    textarea {
      min-height: 100px;
    }
  }
`

export const Button = styled.button`
  border: 2px solid #71c5bd;
  background: #71c5bd;
  color: #fff;
  padding: 10px 20px;
  margin: 5px;
  font-size: 14px;
  border-radius: 5px;
  @media(max-width: 570px){
    margin: 5px 5px 5px 15px;
  }
`

export const Alert = styled.div`
  border: 2px solid ${({type}) => type === 'error' ? '#ff5252' : '#34a883'};
background: ${({type}) => type === 'error' ? '#ff5252' : '#34a883'};
  color: #ffffff;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  width: 99%;
  margin: 10px auto;
  
`

export const Star = styled.div`
  margin: 10px 3px;
  position: relative;
  display: block;
  color: #333;
  width: 0px;
  height: 0px;
  border-right: 10px solid transparent;
  border-bottom: 7px solid #333;
  border-left: 10px solid transparent;
  transform: rotate(35deg);
  cursor: pointer;
  &::before {
    border-bottom: 8px solid #333;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -4.5px;
    left: -6.5px;
    display: block;
    content: '';
    transform: rotate(-35deg);
  }
  &::after {
    position: absolute;
    display: block;
    color: #333;
    top: 1px;
    left: -11px;
    width: 0px;
    height: 0px;
    border-right: 10px solid transparent;
    border-bottom: 7px solid #333;
    border-left: 10px solid transparent;
    transform: rotate(-70deg);
    content: '';
  }
  &.selected, &:hover ~ div, &:hover{
    color: #333;
    border-bottom: 7px solid #debd41;
    &:before{
      border-bottom: 7px solid #debd41;
    }
    &::after {
      color: #debd41;
      border-bottom: 7px solid #debd41;
    }
  }
` 

export const RatingWrapper = styled.div`
  display: flex;
  padding: 5px 10px;
  flex-direction: row-reverse;
  justify-content: flex-end;
`