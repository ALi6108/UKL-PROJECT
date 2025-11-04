export default function UsersPage() {
  const users = [
    { id: 1, name: 'Ali Abidin', role: 'Admin' },
    { id: 2, name: 'Siti Rahma', role: 'Karyawan' },
  ];

  return (
    <div>
      <h2>Manajemen Pengguna</h2>
      <button className="btn btn-primary" style={{ marginBottom: '10px' }}>+ Tambah Pengguna</button>
      <table className="table">
        <thead>
          <tr><th>Nama</th><th>Role</th><th>Aksi</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>
                <button className="btn btn-warning" style={{ marginRight: '5px' }}>Edit</button>
                <button className="btn btn-danger">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
