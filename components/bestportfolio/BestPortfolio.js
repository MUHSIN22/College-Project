import React from "react";
import {
  bestPortfolioSection,
  cards,
} from "./BestPortfolio.module.css";
import Card from './Card'

const BestPortfolio = () => {
  return (
    <div className={bestPortfolioSection}>
      <h1>Checkout The Best Portfolios Here</h1>
      <div className={cards}>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>
  );
};

export default BestPortfolio;
