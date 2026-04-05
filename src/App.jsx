import React, { useState } from "react";
import { data } from "./data/data";
import SummaryCard from "./components/SummaryCard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";
import RoleToggle from "./components/RoleToggle";
import Chart from "./components/Chart";

function App() {
  const [role, setRole] = useState("viewer");

  const income = data
    .filter((d) => d.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = data
    .filter((d) => d.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Priyanka Finance Dashboard</h1>
      <p>Simple financial tracking dashboard</p>

      {/* Role Toggle */}
      <RoleToggle role={role} setRole={setRole} />

      {/* Summary Cards */}
      <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expense" value={expense} />
        <SummaryCard title="Balance" value={balance} />
      </div>

      {/* Chart */}
      <div style={{ marginTop: "20px" }}>
        <Chart data={data.filter((d) => d.type === "expense")} />
      </div>

      {/* Role-Based UI */}
      <div style={{ marginTop: "20px" }}>
        {role === "admin" ? (
          <button>Add Transaction</button>
        ) : (
          <p>Viewer mode (read only)</p>
        )}
      </div>

      {/* Insights */}
      <div style={{ marginTop: "20px" }}>
        <Insights data={data} />
      </div>

      {/* Transactions */}
      <div style={{ marginTop: "20px" }}>
        <Transactions data={data} />
      </div>
    </div>
  );
}

export default App;
