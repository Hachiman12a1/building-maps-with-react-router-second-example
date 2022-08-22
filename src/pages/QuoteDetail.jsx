import React, { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from './../components/comments/Comments';
import HighlightedQuote from './../components/quotes/HighlightedQuote';


const DUMMY_DATA = [
  { id: "q1", author: "Dat", text: "Learning React is fun!" },
  { id: "q2", author: "Max", text: "Learning React is great!" },
];

function QuoteDetail(props) {
  const params = useParams();

  const quote =  DUMMY_DATA.find(quote => quote.id === params.quoteId)

  if(!quote) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author = {quote.author}/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
