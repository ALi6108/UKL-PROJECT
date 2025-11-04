'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // simulasi login sederhana
    if (email === 'ali_abidin_33rpl@student.smktelkom-mlg.sch.id' && password === '123456') {
      localStorage.setItem('token', 'fake-jwt-token');
      alert('Login berhasil!');
      router.push('/');
    } else {
      alert('Email atau password salah');
    }
  }

  return (
    <form onSubmit={handleLogin} style={{
      background: '#fff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      width: '320px'
    }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', margin: '5px 0 15px' }}
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', margin: '5px 0 20px' }}
      />

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%',  padding: '8px', margin: '5px 0 20px' }}
      >
        Masuk
      </button>
    
     
    </form>
  );
}
