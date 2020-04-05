import { emailIsValid, validate, calculateTotalRating } from './index'

describe('email is valid' , () => {
  test('it returns false when is not valid', () => {
    const result = emailIsValid('jakdflksd')
    expect(result).toBe(false)
  })

  test('it returns false when is not valid', () => {
    const result = emailIsValid('juanmaperez@gmail.com')
    expect(result).toBe(true)
  })
})

describe('validates' , () => {
  test('it validates correctly when the values are correct', () => {
    const result = validate({ name: 'Juanma', rate: 2, email: 'juanmaperez@gmail.com', comment: 'here is a comment'})
    expect(result.error).toBe(undefined)
  })

  test('it validates correctly when the values are correct', () => {
    const result = validate({ name: 'Juanma', rate: 2, email: 'juanmaperez@gmail.com', comment: ''})
    expect(result.error).toBe('Comment is required')
  })
})

describe('calculateTotalRating', () => {
  test('it returns 0 when array is empty', () => {
    const comments = []
    const result = calculateTotalRating(comments)
    expect(result).toBe(0)
  })
  test('it returns the correct value', () => {
    const comments = [
      { name: 'Juanma', rate: 2, email: 'juanmaperez@gmail.com', comment: 'here is a comment'},
      { name: 'Juanma P', rate: 4, email: 'juanmaperezvar@gmail.com', comment: 'here is a comment 2'}
    ]
    const result = calculateTotalRating(comments)
    expect(result).toBe(3)
  })
})


