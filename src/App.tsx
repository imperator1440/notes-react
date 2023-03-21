import React from 'react';
import logo from './logo.svg';
import './App.scss';

import NoteEditor from './components/note-editor/note-editor.component';

function App() {
  return (
    <div className="App">
      <NoteEditor/>
    </div>
  );
}

export default App;
