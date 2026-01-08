"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EditNotePage({ params }) {
  const { id } = params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Load note when component mounts
  useEffect(() => {
    let mounted = true;
    fetch(`/api/notes/${id}`).then((r) => r.json()).then((data) => {
      if (!mounted) return;
      setTitle(data.title || '');
      setContent(data.content || '');
    });
    return () => (mounted = false);
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await fetch(`/api/notes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    setLoading(false);
    router.push(`/notes/${id}`);
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Edit Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full rounded border p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={6} className="mt-1 block w-full rounded border p-2" />
        </div>
        <div>
          <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
}
