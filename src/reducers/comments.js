import { FETCH_COMMENTS, SUCCESS, ERROR, ADD_COMMENT } from './../constants'
import { calculateTotalRating } from './../utils'

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
        totalRating: calculateTotalRating([...state.comments, action.payload])
      }
    case SUCCESS:
      return {
        comments: action.payload,
        loading: false,
        error: false,
        totalRating: calculateTotalRating(action.payload)

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

