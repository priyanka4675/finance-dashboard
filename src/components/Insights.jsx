import React from "react";

export default function Insights({ data }) {
  const expenses = data.filter(d => d.type === "expense");

  const totalExpense = expenses.reduce((a, b) => a + b.amount, 0);

  const highest = expenses.reduce((a, b) =>
    a.amount > b.amount ? a : b, expenses[0]
  );

  return (
    <div>
      <h2>Insights</h2>
      <p>Total Expense: ₹{totalExpense}</p>
      {highest && (
        <p>Highest Spending: {highest.category} (₹{highest.amount})</p>
      )}
    </div>
  );
}
