import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CommentList from './CommentList';

describe('CommentList', () => {
  afterEach(cleanup);
  let commentsMock = [{ email: 'apple2@gmail.com', rate: 3, name: 'juan', comment: 'a comment'}, { email: 'apple@gmail.com', rate: 3, name: 'juan', comment: 'a comment'}]

  test('No comments message when array is empty', () => {
    const { getByText } = render(<CommentList commentList={[]}/>)
    expect(getByText(/No comments/)).toBeTruthy()
  })

  test('N comments according to props', () => {
    const { getAllByTestId } = render(<CommentList commentList={commentsMock}/>)
    expect(getAllByTestId('comment').length).toBe(2)
  })
})