import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "./../components/quotes/QuoteForm";

NewQuote.propTypes = {};

function NewQuote(props) {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
