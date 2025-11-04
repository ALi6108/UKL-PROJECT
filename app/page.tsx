import Card from '../components/Card';

export default function Dashboard() {
  return (
    <div>
      <h2>Rekap Kehadiran</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Card title="Hadir" value="25" color="#28a745" />
        <Card title="Izin" value="3" color="#ffc107" />
        <Card title="Sakit" value="2" color="#dc3545" />
      </div>
    </div>
  );
}
