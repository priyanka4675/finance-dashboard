import React, { useState } from "react";
export default function Transactions({ data }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredData = data.filter((t) => {
    return (
      t.category.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter === "all" || t.type === typeFilter)
    );
  });

  return (
    <div>
      <h2>Transactions</h2>

      <input
        type="text"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {filteredData.map((t) => (
        <div key={t.id}>
          {t.date} | ₹{t.amount} | {t.category} | {t.type}
        </div>
      ))}

      {filteredData.length === 0 && <p>No transactions found</p>}
    </div>
  );
}
