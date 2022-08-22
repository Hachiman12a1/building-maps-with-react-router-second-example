import React from "react";
import QuoteList from './../components/quotes/QuoteList';


const DUMMY_DATA = [
  { id: "q1", author: "Dat", text: "Learning React is fun!" },
  { id: "q2", author: "Max", text: "Learning React is great!" },
];

function AllQuote(props) {
  return <QuoteList quotes={DUMMY_DATA} />;
}

export default AllQuote;
