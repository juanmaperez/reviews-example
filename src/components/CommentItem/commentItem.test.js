import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CommentItem from './CommentItem';

describe('CommentItem', () => {
  const itemMock = { name: 'John', comment: 'This is a message', rate: 5 }
  afterEach(cleanup)
  test('the correct comment is displayed', () => {
    const { getByText } = render(<CommentItem item={itemMock} />)
    expect(getByText(/This is a message/)).toBeTruthy()
  })
})