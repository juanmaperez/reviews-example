import { emailIsValid, validate } from './index'

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