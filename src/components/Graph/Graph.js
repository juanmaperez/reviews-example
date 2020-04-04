import React, { useEffect, useState } from 'react'
import { GraphWrapper } from './../../styled-components/graph'
import Bar from './Bar'

export default ({comments, totalRating}) => {
  const allRates = [5, 4, 3, 2, 1] 
  const [commentsByRate, setCommentsByRate] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if(comments){
      setTotal(comments.length);
      setCommentsByRate(comments.reduce((acc, comment) => {
        if(!acc[comment.rate]){
          acc[comment.rate] = 1
        } else {
          acc[comment.rate] += 1
        }
        return acc;
      },{}))
    }
  }, [comments])

  const calculatePercentage = (comments, total) => {
    return (comments/total) * 100
  }

  return commentsByRate && (
    <GraphWrapper>
      <span data-testid="rating" className="average">{totalRating}</span>
      { allRates.map((value, i) => <Bar value={value} key={i} percentage={ calculatePercentage(commentsByRate[value], total)  }/>) }
    </GraphWrapper>)

}