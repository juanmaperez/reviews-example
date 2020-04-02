import React, { useState } from 'react'
import { FormWrapper, FormTitle, FieldsetWrapper, Alert, Button } from './../../styled-components/form'
import Rating from './Rating'
import { validate } from './../../utils'

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
    validate(values, setError)
    if(!error){
      handleComment(values)
    }
  }
  
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTitle>Leave a review for this product</FormTitle>
      <FieldsetWrapper>
        <input type="text" name="name" value={values.name} onChange={handleOnChange} placeholder="name"/>
        <input type="text" name="email" value={values.email} onChange={handleOnChange} placeholder="Email"/>
        <Rating currentRate={values.rate} setRate={handleOnChange}/>
      </FieldsetWrapper>
      <FieldsetWrapper>
        <textarea name="comment" value={values.comment} onChange={handleOnChange} placeholder="Leave a comment"/>
      </FieldsetWrapper>
      <Button type="submit">Enviar</Button>
      { values.error && <Alert type={'error'}>{values.error}</Alert>}
      { values.success && <Alert type={'error'}>Tu mensaje se ha enviado correctamente</Alert>}
    </FormWrapper>
  )
}

export default Form;