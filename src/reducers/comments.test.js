
import { commentsReducer, initialState } from './comments'
import { ADD_COMMENT, ERROR } from './../constants'

describe('comments reducer', () => {
  test('adds a comments properly', () => {
    const state = commentsReducer(initialState , {})
    expect(state.comments.length).toBe(0)
  })

  test('adds a comments properly', () => {
    const state = commentsReducer(initialState , { type: ADD_COMMENT, payload: { email: 'apple2@gmail.com', rate: 3, name: 'juan', comment: 'a comment'}})
    expect(state.comments.length).toBe(1)
  })

  test('returns an error correctly', () => {
    const state = commentsReducer(initialState , { type: ERROR, payload: 'Something went wrong' })
    expect(state.error).toBe('Something went wrong')
  })
})