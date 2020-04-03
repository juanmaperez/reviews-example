import { FETCH_COMMENTS, SUCCESS, ERROR, ADD_COMMENT } from './../constants'

export const initialState = {
  comments: [],
  loading: true,
  error: false,
  totalRating: 0
}

export const commentsReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_COMMENTS:
      return {
        ...state,
        loading: true
      }
    case ADD_COMMENT:
      return {
        comments: [...state.comments, action.payload],
        loading: false,
        error: false,
        totalRating: [...state.comments, action.payload].reduce((acc, item, index, arr) => acc + item.rate,0)/state.comments.length + 1
      }
    case SUCCESS:
      return {
        comments: action.payload,
        loading: false,
        error: false,
        totalRating: [action.payload].reduce((acc, item, index, arr) => acc + item.rate,0)/action.payload.length

      }
    case ERROR: 
      return {
        ...state,
        error: action.payload,
      }

    default: 
      return state
  }
}

