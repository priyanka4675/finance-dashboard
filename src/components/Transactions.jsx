import React, { useState } from "react";

export default function Transactions({ data }) {
  const [search, setSearch] = useState("");

  // filter logic
  const filteredData = data.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Transactions</h2>

      {/* 🔍 SEARCH BOX */}
      <input
        type="text"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px" }}
      />

      {/* LIST */}
      {filteredData.map((t) => (
        <div key={t.id}>
          {t.date} | ₹{t.amount} | {t.category} | {t.type}
        </div>
      ))}

      {/* EMPTY CASE */}
      {filteredData.length === 0 && <p>No transactions found</p>}
    </div>
  );
}
