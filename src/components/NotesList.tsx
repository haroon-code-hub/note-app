import { Note } from "../App";

type NotesListProps = {
  notes: Note[];
};

export default function NotesList({ notes }: NotesListProps) {
  if (notes.length === 0) {
    return <p>No notes yet...</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>
            <strong>Category: </strong>
            {note.category}
          </p>
          <p>
            <strong>Priority: </strong>
            {note.priority}
          </p>
          <p>
            <strong>Description: </strong>
            {note.description}
          </p>
        </div>
      ))}
    </div>
  );
}
