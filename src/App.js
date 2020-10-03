import React from "react";
import "./App.css";
import CurrentBalance from "./components/CurrentBalance";
import Header from "./components/Header";
import TransactionHistory from "./components/TransactionHistory";
import NewTransaction from "./components/NewTransaction";
import TransactionBanner from "./components/TransactionBanner";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div id="container">
        <div id="main-app">
          <CurrentBalance />
          <TransactionBanner />
          <NewTransaction />
        </div>
        <div id="app-history">
          <TransactionHistory />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
