import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Notes App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow">
          <div className="container flex items-center justify-between">
            <h1 className="text-xl font-semibold py-4">Notes</h1>
            <nav>
              <Link href="/notes" className="text-blue-600 hover:underline">All Notes</Link>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
