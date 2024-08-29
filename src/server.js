export const fetchTransactions = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        { customerId: 1, date: "2024-06-01", amount: 120 },
        { customerId: 1, date: "2024-06-15", amount: 75 },
        { customerId: 1, date: "2024-07-01", amount: 60 },
        { customerId: 1, date: "2024-08-01", amount: 200 },
        { customerId: 2, date: "2024-06-01", amount: 50 },
        { customerId: 2, date: "2024-07-15", amount: 75 },
        { customerId: 2, date: "2024-08-01", amount: 60 },
        { customerId: 2, date: "2024-08-15", amount: 100 },
        { customerId: 3, date: "2024-06-10", amount: 150 },
        { customerId: 3, date: "2024-07-22", amount: 80 },
        { customerId: 3, date: "2024-08-05", amount: 90 },
      ];
      resolve(data);
    }, 1000);
  });
};
