import React, { useState } from "react";
import { data } from "./data/data";
import SummaryCard from "./components/SummaryCard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";
import RoleToggle from "./components/RoleToggle";
import Chart from "./components/Chart";

function App() {
  const [role, setRole] = useState("viewer");

  const income = data.filter(d => d.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = data.filter(d => d.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Finance Dashboard</h1>

      <RoleToggle role={role} setRole={setRole} />

      <SummaryCard title="Income" value={income} />
      <SummaryCard title="Expense" value={expense} />
      <SummaryCard title="Balance" value={income - expense} />

      <Chart data={data.filter(d => d.type === "expense")} />

      {role === "admin" ? <button>Add</button> : <p>Viewer</p>}

      <Insights data={data} />
      <Transactions data={data} />
    </div>
  );
}

export default App;
