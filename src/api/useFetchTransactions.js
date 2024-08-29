import { useState, useEffect } from "react";
import { fetchTransactions } from "../server";

export const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        setError("Failed to fetch transactions.");
      } finally {
        setLoading(false);
      }
    };
    loadTransactions();
  }, []);

  return { transactions, loading, error };
};
