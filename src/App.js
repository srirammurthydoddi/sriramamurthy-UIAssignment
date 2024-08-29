import React from "react";
import CustomerRewardPoints from "./components/CustomerRewardPoints";
import Loader from "./components/Loader";
import { useFetchTransactions } from "./api/useFetchTransactions";
import "./App.css";

const App = () => {
  const { transactions, loading, error } = useFetchTransactions();

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app">
      <h1>Customer Rewards Program</h1>
      <CustomerRewardPoints transactions={transactions} />
    </div>
  );
};

export default App;
