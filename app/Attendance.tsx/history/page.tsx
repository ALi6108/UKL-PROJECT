export default function HistoryPage() {
  const data = [
    { date: '2025-11-01', status: 'Hadir', in: '08:00', out: '17:00' },
    { date: '2025-11-02', status: 'Izin', in: '-', out: '-' },
  ];

  return (
    <div>
      <h2>Riwayat Presensi</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Status</th>
            <th>Masuk</th>
            <th>Pulang</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.date}</td>
              <td>{d.status}</td>
              <td>{d.in}</td>
              <td>{d.out}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
