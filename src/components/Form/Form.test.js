import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Form from './Form';


describe('Form', () => {
  afterEach(cleanup)

  test('Action called if all fields are completed', () => {
    const handleCommentMock = jest.fn()
    const { getByTestId, getAllByTestId, getByText } = render(<Form handleComment={handleCommentMock}/>)
    const name = getByTestId('nameInput')
    const email = getByTestId('emailInput')
    const comment = getByTestId('commentInput')
    const rateBtn = getAllByTestId('rateBtn')
    fireEvent.change(name, { target: { value: 'Juanma Perez' } })
    fireEvent.change(email,  { target: { value: 'juanmaperez@gmail.com' } })
    fireEvent.change(comment, { target: { value: 'You must leave a comment' } })
    fireEvent.click(rateBtn[2])

    fireEvent.click(getByText(/Send/))
    expect(handleCommentMock).toHaveBeenCalled()
  })

  test('Action not called if all fields are not completed', () => {
    const handleCommentMock = jest.fn()
    const { getByText } = render(<Form handleComment={handleCommentMock}/>)
    fireEvent.click(getByText(/Send/))
    expect(handleCommentMock).not.toHaveBeenCalled()
  })

  
})

