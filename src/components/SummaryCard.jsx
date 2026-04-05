export default function SummaryCard({ title, value }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px" }}>
      <h3>{title}</h3>
      <h2>₹ {value}</h2>
    </div>
  );
}
