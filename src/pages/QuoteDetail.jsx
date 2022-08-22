import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

QuoteDetail.propTypes = {};

function QuoteDetail(props) {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
    </Fragment>
  );
}

export default QuoteDetail;
