import connect from '../../../../lib/mongodb';
import Note from '../../../../models/Note';

export async function GET(request, { params }) {
  const { id } = params;
  await connect();
  const note = await Note.findById(id);
  if (!note) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  return new Response(JSON.stringify(note), { status: 200 });
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const body = await request.json();
  await connect();
  const note = await Note.findByIdAndUpdate(id, body, { new: true });
  if (!note) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  return new Response(JSON.stringify(note), { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connect();
  const note = await Note.findByIdAndDelete(id);
  if (!note) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  return new Response(null, { status: 204 });
}
