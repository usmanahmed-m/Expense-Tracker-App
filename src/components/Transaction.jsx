import React, { useContext } from 'react';
import { GlobalContext } from './../context/GlobalState';

const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext)


    const sign = transaction.amount < 0 ? '-' : '+'


    return (
        <li id='li' key={transaction.id}>
            {transaction.description}<span>
                {sign}${Math.abs(transaction.amount)}
                <button id='delete-button' onClick={() => deleteTransaction(transaction.id)}>x</button></span>
        </li>
    );
};
export default Transaction;