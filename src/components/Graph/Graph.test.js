import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Graph from './Graph';

describe('Graph', () => {
  afterEach(cleanup);
  let commentsMock = [{ term: 'apple', rate: 5, name: 'juan'}, { term: 'apple', rate: 4, name: 'juan'}]

  test('Total Rating is displayed correctly', () => {
    const { getByTestId } = render(<Graph comments={commentsMock} totalRating={ 4.5 }/>)
    expect(getByTestId('rating').textContent).toBe('4.5')
  })

})