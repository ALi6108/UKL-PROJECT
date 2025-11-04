export default function Card({ title, value, color }: { title: string; value: string; color: string }) {
  return (
    <div className="card" style={{ borderLeft: `5px solid ${color}`, flex: '1' }}>
      <h3>{title}</h3>
      <p style={{ fontSize: '24px', margin: 0 }}>{value}</p>
    </div>
  );
}
