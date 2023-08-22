import React, { useState, useEffect } from "react";
import "./MainSide.css";

interface MainProps {
  onSave: (data: { title: string; content: string }) => void;
  selectedNote: { title: string; content: string } | null;
  selectedNoteContent: string; // Add selectedNoteContent prop
}

const Main = ({ onSave, selectedNote, selectedNoteContent }: MainProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNoteContent);
    }
  }, [selectedNote, selectedNoteContent]);

  const handleSave = () => {
    if (title && content) {
      onSave({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="main">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="editor"
        placeholder="Write your notes here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default Main;
