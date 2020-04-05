export const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


export const validate = (values) => {
  if ( values.name.length < 5 ) {
    values['error'] = 'Name is required';
  } 
  if(values.email === '' ){
    values['error'] = 'Email required required';
  }
  if(!emailIsValid(values.email)){
    values['error'] = 'Invalid email';
  }
  if(values.rate < 1 ){
    values['error'] = 'Rate is required';
  }
  if(values.comment === '' ){
    values['error'] = 'Comment is required';
  }
  return values
}


export const getCommentsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('comments'))
}

export const setCommentsLocalStorage = (comments) => {
  localStorage.setItem('comments', JSON.stringify(comments))
} 

export const calculateTotalRating = (comments) => {
  const total = comments.length;
  if(total < 1) return 0; 

  const addition = comments.reduce((acc, item ) => acc+item.rate, 0)/total
  
  return addition % 1 === 0 ? addition : addition.toFixed(1);
}

