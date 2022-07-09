import React from "react";
import NotesItem from "./NotesItem";

function NotesList({notes, onDelete, onArchive, searchQuery}){
    if (notes.length > 0){
        if (!searchQuery){
            return (
                <div className="notes-list">
                    {(notes).map(note => {
                        return <NotesItem key={note.id} item={note} onArchive={onArchive} onDelete={onDelete}/>
                    })}
                </div>
            )
        } else {
            const uncapitalizedSearchQuery = searchQuery.toLowerCase()
            const regex = new RegExp(uncapitalizedSearchQuery)
            const filteredNotes = notes.filter((note) => {
                return regex.test(note.title.toLowerCase())
            })
            return (
                <div className="notes-list">
                    {
                        filteredNotes.map(note => {
                            return <NotesItem key={note.id} item={note} onArchive={onArchive} onDelete={onDelete}/>
                        })
                    }
                </div>
            )
        }
        
    } else {
        return (
            <div className="notes-list__empty-message">
                <p>Tidak ada catatan</p>
            </div>
        )
    }
    
}

export default NotesList;