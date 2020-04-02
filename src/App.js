import React, { useReducer } from 'react';
import Layout from './components/Layout/Layout';
import Form from './components/Form/Form';
import { commentsReducer, initialState } from './reducers/comments';
import CommentList from './components/CommentList/CommentList'
import Graph from './components/Graph/Graph'
import Loading from './styled-components/Loading'
import { CommentListWrapper } from './styled-components/CommentList'

function App() {
  const [{loading, error, comments, totalRating}, dispatch] = useReducer(commentsReducer, initialState)


  return (
    <div className="App">
      <Layout>
        <Form handleComment={dispatch}/>
        <Graph/>
        <CommentListWrapper>
          { loading 
          ? <Loading /> 
          : <CommentList/> }
        </CommentListWrapper>
      </Layout>
    </div>
  );
}

export default App;
