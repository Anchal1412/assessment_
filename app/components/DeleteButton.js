"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ id }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleDelete(e) {
    e.preventDefault();
    const ok = confirm('Delete this note?');
    if (!ok) return;
    setLoading(true);
    await fetch(`/api/notes/${id}`, { method: 'DELETE' });
    setLoading(false);
    router.push('/notes');
  }

  return (
    <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded" disabled={loading}>
      {loading ? 'Deleting...' : 'Delete'}
    </button>
  );
}
