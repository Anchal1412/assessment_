import Link from 'next/link';
import connect from '../../lib/mongodb';
import Note from '../../models/Note';

async function getNotes() {
  await connect();
  const notes = await Note.find().sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(notes));
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">All Notes</h2>
        <Link href="/notes/new" className="bg-blue-600 text-white px-4 py-2 rounded">New Note</Link>
      </div>

      <ul className="space-y-4">
        {notes.length === 0 && <li>No notes yet.</li>}
        {notes.map((note) => (
          <li key={note._id} className="bg-white p-4 rounded shadow">
            <Link href={`/notes/${note._id}`} className="block">
              <h3 className="text-lg font-semibold">{note.title}</h3>
              <p className="text-sm text-gray-600">{new Date(note.createdAt).toLocaleString()}</p>
              <p className="mt-2 text-gray-800 line-clamp-2">{note.content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
