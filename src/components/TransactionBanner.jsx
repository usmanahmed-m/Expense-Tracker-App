import React, { useContext } from "react";
import { GlobalContext } from './../context/GlobalState';

const TransactionBanner = () => {

  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2) * 1

  // console.log(income);

  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2) * -1

  // console.log(expense);

  return (
    <div id="banner">
      <div id='income'>
        <h4>INCOME</h4>
        <span>{income}</span>
      </div>
      <div id='expense'>
        <h4>EXPENSE</h4>
        <span>{expense}</span>
      </div>
    </div>
  );
};

export default TransactionBanner;
