import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./MainSide";

const App = () => {
  const [notes, setNotes] = useState<Array<{ title: string; content: string }>>(
    []
  );
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1);
  const [selectedNoteContent, setSelectedNoteContent] = useState("");

  const handleSaveNote = (note: { title: string; content: string }) => {
    setNotes([...notes, note]);
  };

  const handleDeleteNote = (index: number) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    if (selectedNoteIndex === index) {
      setSelectedNoteIndex(-1);
      setSelectedNoteContent(""); // Reset selected note content
    }
  };

  const handleNoteClick = (index: number, content: string) => {
    setSelectedNoteIndex(index);
    setSelectedNoteContent(content); // Set selected note content
  };

  return (
    <div className="app">
      <Sidebar
        notes={notes}
        onDelete={handleDeleteNote}
        onNoteClick={handleNoteClick}
      />
      <Main
        onSave={handleSaveNote}
        selectedNote={
          selectedNoteIndex !== -1 ? notes[selectedNoteIndex] : null
        }
        selectedNoteContent={selectedNoteContent}
      />
    </div>
  );
};

export default App;
