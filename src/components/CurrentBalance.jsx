import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


const CurrentBalance = () => {

  const { transactions } = useContext(GlobalContext)


  const amounts = transactions.map(transaction => transaction.amount)


  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div id="current-balance">
      <h4>Current Balance</h4>
      {total}
    </div>
  );
};

export default CurrentBalance;
