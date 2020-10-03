import React, { useContext, useState } from "react";
import { GlobalContext } from './../context/GlobalState';

const NewTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      description,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h4 id='form-heading'>Add New Transaction</h4>

      <div id="form">
        <form onSubmit={onSubmit}>
          <label htmlFor="description">Description</label>
          <br />
          <input className='input'
            id="description"
            type="text"
            placeholder="Details of Transaction"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label htmlFor="transaction">Transaction Amount</label>
          <br />
          <input className='input'
            id="transaction"
            type="number"
            placeholder="Enter Transcation Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <br />
          <button id='submit'>Add Transcation</button>
        </form>
      </div>
    </>
  );
};

export default NewTransaction;
