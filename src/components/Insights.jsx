export default function Insights({ data }) {
  const expenses = data.filter(d => d.type === "expense");
  const highest = expenses.reduce((a, b) => a.amount > b.amount ? a : b, expenses[0]);

  return (
    <div>
      <h2>Insights</h2>
      {highest && <p>Highest expense: {highest.category} (₹{highest.amount})</p>}
    </div>
  );
}
