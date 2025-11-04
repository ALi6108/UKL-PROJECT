'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const path = usePathname();
  const navs = [
    { href: '/', label: 'Dashboard' },
    { href: '/attendance', label: 'Presensi' },
    { href: '/attendance/history', label: 'Riwayat Presensi' },
    { href: '/users', label: 'Manajemen Pengguna' },
  ];

  return (
    <div className="sidebar">
      {navs.map((n) => (
        <Link key={n.href} href={n.href}>
          <span style={{ fontWeight: path === n.href ? 'bold' : 'normal' }}>
            {n.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
