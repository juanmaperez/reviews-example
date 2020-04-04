export const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


export const validate = (values, setError) => {
  if ( values.name.length < 5 ) {
    setError('Name is required');
  } 
  if(values.email === '' ){
    setError('Email required required');
  }
  if(!emailIsValid(values.email)){
    setError('Invalid email');
  }
  if(values.rate < 1 ){
    setError('Rate is required');
  }
  if(values.comment === '' ){
    setError('Comment is required');
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
  const addition = comments.reduce((acc, item ) => acc+item.rate , 0)
  return (addition/total).toFixed(1);
}
