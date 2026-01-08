import Link from 'next/link';
import connect from '../../../lib/mongodb';
import Note from '../../../models/Note';
import DeleteButton from '../../components/DeleteButton';

async function getNote(id) {
  await connect();
  const note = await Note.findById(id).lean();
  if (!note) return null;
  return JSON.parse(JSON.stringify(note));
}

export default async function NotePage({ params }) {
  const note = await getNote(params.id);
  if (!note) return <p>Note not found.</p>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{note.title}</h2>
        <div className="space-x-2">
          <Link href={`/notes/${note._id}/edit`} className="bg-yellow-400 px-3 py-1 rounded">Edit</Link>
        </div>
      </div>
      <p className="text-sm text-gray-600">{new Date(note.createdAt).toLocaleString()}</p>
      <div className="bg-white p-4 rounded shadow">{note.content}</div>
      <div>
        <DeleteButton id={note._id} />
      </div>
    </div>
  );
}
