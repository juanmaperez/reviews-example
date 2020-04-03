import { FETCH_COMMENTS, ERROR, SUCCESS, ADD_COMMENT } from "../constants"
import { getCommentsFromLocalStorage, setCommentsLocalStorage } from './../utils/index'

export const fetchCommentsAction = dispatch => {
  
  dispatch({type: FETCH_COMMENTS})
  const comments = getCommentsFromLocalStorage() || []
  
  if(!comments){
    return dispatch({type: ERROR})
  }
  return dispatch({type: SUCCESS, payload: comments})
}

export const addCommentAction = comment => dispatch => {
  const comments = getCommentsFromLocalStorage();
  const value = comments ? [...comments, comment] : [comment]
  setCommentsLocalStorage(value)
  dispatch({type: ADD_COMMENT, payload: comment})
} 