import connect from '../../../lib/mongodb';
import Note from '../../../models/Note';

export async function GET() {
  await connect();
  const notes = await Note.find().sort({ createdAt: -1 });
  return new Response(JSON.stringify(notes), { status: 200 });
}

export async function POST(request) {
  const body = await request.json();
  const { title, content } = body;
  if (!title || !content) {
    return new Response(JSON.stringify({ error: 'Title and content required' }), { status: 400 });
  }

  await connect();
  const note = await Note.create({ title, content });
  return new Response(JSON.stringify(note), { status: 201 });
}
