import React, { useState } from "react";

function App() {
  const [role, setRole] = useState("viewer");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Priyanka Finance Dashboard</h1>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <p>Dashboard is working ✅</p>
    </div>
  );
}

export default App;
