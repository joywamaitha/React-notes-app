import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  notes: Array<{ title: string; content: string }>;
  onDelete: (index: number) => void;
  onNoteClick: (index: number, content: string) => void; // Add onNoteClick prop
}

const Sidebar = ({ notes, onDelete, onNoteClick }: SidebarProps) => {
  return (
    <div className="sidebar">
      <h2>Your Notes Here</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <button
              className="note-title"
              onClick={() => onNoteClick(index, note.content)} // Pass content to onNoteClick
            >
              {note.title}
            </button>
            <button className="delete-button" onClick={() => onDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
