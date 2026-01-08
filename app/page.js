import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome to the Notes app</h2>
      <p>Simple full-stack Next.js + MongoDB example.</p>
      <Link href="/notes" className="text-blue-600 hover:underline">View notes</Link>
    </div>
  );
}
