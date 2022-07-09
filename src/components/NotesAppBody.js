import React from "react";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

function NotesAppBody({notes, onDelete, onArchive, onAddNote, searchQuery}){
    const activeNotes = notes.filter((note) => !note.archived)
    const archivedNotes = notes.filter((note) => note.archived)
    return (
        <div className="note-app__body">
            <NotesForm onAddNote={onAddNote}/>
            <h2>Catatan Aktif</h2>
            <NotesList notes={activeNotes} onArchive={onArchive} onDelete={onDelete} searchQuery={searchQuery}/>
            <h2>Arsip</h2>
            <NotesList notes={archivedNotes} onArchive={onArchive} onDelete={onDelete} searchQuery={searchQuery}/>
        </div>
    )
}

export default NotesAppBody