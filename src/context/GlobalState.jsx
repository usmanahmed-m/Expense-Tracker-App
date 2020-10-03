import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 0, description: "Sample Income1 ", amount: 1000 },
    { id: 1, description: "Sample Expense1 ", amount: -500 },
    { id: 2, description: "Sample Income2 ", amount: 2000 },
    { id: 3, description: "Sample Expense2 ", amount: -700 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState)

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      { children}
    </GlobalContext.Provider >
  )
} 