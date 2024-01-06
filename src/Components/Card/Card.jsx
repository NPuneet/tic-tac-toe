import React from "react";
import cardCss from "../Card/Card.module.css";
import cardImage from '../../assets/cardImage.svg';
import useFetchdata from "../custom hooks/useFetchdata";
const Card = () => {
  const [fetchQuote, fetchId] = useFetchdata();
  return (
    <>
      <div className={cardCss.quoteCard}>
        <h1>Quote #{fetchId}</h1>
        <span>"{fetchQuote}"</span>
        <img src={cardImage} />
      </div>
    </>
  );
};

export default Card;
