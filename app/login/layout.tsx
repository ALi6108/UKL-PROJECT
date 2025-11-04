import '../globals.css';

export const metadata = { title: 'Login - Presensi Online' };

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f6fa'
      }}>
        {children}
      </body>
    </html>
  );
}
