'use client';
import { useState } from 'react';

export default function AttendancePage() {
  const [status, setStatus] = useState('Hadir');
  const [note, setNote] = useState('');

  return (
    <div>
      <h2>Presensi Hari Ini</h2>
      <div className="card">
        <label>Status:</label><br />
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option>Hadir</option>
          <option>Izin</option>
          <option>Sakit</option>
        </select>
        <br /><br />
        <label>Catatan:</label><br />
        <input value={note} onChange={e => setNote(e.target.value)} style={{ width: '100%', padding: '8px' }} />
        <br /><br />
        <button className="btn btn-success">Check-In</button>
        <button className="btn btn-warning" style={{ marginLeft: '10px' }}>Check-Out</button>
      </div>
    </div>
  );
}
