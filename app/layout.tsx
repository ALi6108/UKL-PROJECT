import './globals.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export const metadata = { title: 'Presensi Online' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Header />
        <Sidebar />
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
