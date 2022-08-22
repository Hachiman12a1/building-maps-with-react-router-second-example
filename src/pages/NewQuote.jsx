import React from 'react';
import QuoteForm from './../components/quotes/QuoteForm';

NewQuote.propTypes = {
    
};

function NewQuote(props) {
    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
    }
    return (
        <QuoteForm onAddQuote = {addQuoteHandler}/>
    );
}

export default NewQuote;