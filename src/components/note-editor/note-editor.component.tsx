import { ChangeEvent, useState } from 'react';

import './note-editor.styles.scss';

const NoteEditor = () => {
  const [note, setNote] = useState('');

  const saveNote = () => {

  };

  const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const text = event.target.value;
    setNote(text);
    console.log(text);
  }

  return (
    <div className='note-editor-container'>
      <textarea value={note} onChange={onTextChange}></textarea>
      <button onClick={saveNote}>Save Note</button>
    </div>
  );
}

export default NoteEditor;