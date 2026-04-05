export default function Transactions({ data }) {
  return (
    <div>
      <h2>Transactions</h2>
      {data.map((t) => (
        <div key={t.id}>
          {t.date} | ₹{t.amount} | {t.category} | {t.type}
        </div>
      ))}
    </div>
  );
}
