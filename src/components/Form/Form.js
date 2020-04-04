import React, { useState } from 'react'
import { FormWrapper, FormTitle, FieldsetWrapper, Alert, Button } from './../../styled-components/form'
import Rating from './Rating'
import { validate } from './../../utils'
import { addCommentAction } from '../../actions/comments'

const initialState = {
  name: '',
  email: '',
  rate: 0,
  comment: ''
}

const Form = ({handleComment}) => {
  const [values, setValues] = useState(initialState)
  const [error, setError] = useState(null)

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setValues(state => ({
      ...state,
      [name] : value
    }))
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    const result = validate(values)
    if(result.error){
      return setError(values.error)
    }
    addCommentAction(values)(handleComment)

  }
  
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTitle>Leave your review</FormTitle>
      <FieldsetWrapper>
        <input data-testid="nameInput" type="text" name="name" value={values.name} onChange={handleOnChange} placeholder="name"/>
        <input data-testid="emailInput" type="text" name="email" value={values.email} onChange={handleOnChange} placeholder="Email"/>
        <Rating currentRate={values.rate} setRate={handleOnChange}/>
      </FieldsetWrapper>
      <FieldsetWrapper>
        <textarea data-testid="commentInput" name="comment" value={values.comment} onChange={handleOnChange} placeholder="Leave a comment"/>
      </FieldsetWrapper>
      <Button type="submit">Send</Button>
      { error && <Alert type={'error'}>{error}</Alert>}
    </FormWrapper>
  )
}

export default Form;