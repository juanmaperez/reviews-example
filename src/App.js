import React, { useReducer, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Form from './components/Form/Form';
import { commentsReducer, initialState } from './reducers/comments';
import CommentList from './components/CommentList/CommentList'
import Graph from './components/Graph/Graph'
import Loading from './styled-components/Loading'
import { CommentListWrapper } from './styled-components/CommentList'
import { fetchCommentsAction } from './actions/comments'

function App() {
  const [{loading, error, comments, totalRating}, dispatch] = useReducer(commentsReducer, initialState)
  console.log(comments)
  useEffect(() => {
    fetchCommentsAction(dispatch)
  }, [dispatch])

  if(error) {
    return (<div>
      <Layout>
        <p>Something went wrong</p>
      </Layout>
    </div>)
  }

  return (
    <div className="App">
      <Layout>
        <Form handleComment={dispatch}/>
        <Graph/>
        <CommentListWrapper>
          { loading 
          ? <Loading /> 
          : <CommentList commentList={comments}/> }
        </CommentListWrapper>
      </Layout>
    </div>
  );
}

export default App;
