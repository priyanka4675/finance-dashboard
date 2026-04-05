import React, { useState } from "react";
import { data } from "./data/data";
import SummaryCard from "./components/SummaryCard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";
import RoleToggle from "./components/RoleToggle";

function App() {
  const [role, setRole] = useState("viewer");

  const income = data.filter(d => d.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = data.filter(d => d.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1> Priyanka Finance Dashboard</h1>
      <p>Simple financial tracking dashboard</p>

      <RoleToggle role={role} setRole={setRole} />

      <div style={{ display: "flex", gap: "10px" }}>
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expense" value={expense} />
        <SummaryCard title="Balance" value={income - expense} />
      </div>

      {role === "admin" && <button>Add Transaction</button>}

      <Insights data={data} />
      <Transactions data={data} />
    </div>
  );
}

export default App;
