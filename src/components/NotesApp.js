import React from 'react'
import NotesAppHeader from './NotesAppHeader'

import { getInitialData } from '../utils'
import NotesAppBody from './NotesAppBody'

class NotesApp extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            notes: getInitialData(),
            searchQuery: ""
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this)
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this)
        this.addNote = this.addNote.bind(this)
        this.updateSearchQuery = this.updateSearchQuery.bind(this)
    }

    updateSearchQuery(newSearchQuery){
        this.setState((prevState) => {
            return {
                ...prevState,
                searchQuery: newSearchQuery
            }
        })
    }

    addNote({title, body}){
        this.setState((prevState) => {
            return {
                ...prevState,
                notes: [...prevState.notes, {
                    id: prevState.notes.length+1,
                    title: title,
                    body: body,
                    archived: false,
                    createdAt: +new Date,
                }]
            }
        })
    }

    onDeleteEventHandler(id){
        this.setState((prevState) => {
            const notes = prevState.notes.filter((note) => note.id !== id)
            return {
                ...prevState,
                notes: notes
            }
        })
    }

    onArchiveEventHandler(id){
        this.setState((prevState) => {
            const notes = prevState.notes.map((note) => {
                if (id == note.id){
                    const isArchived = note.archived
                    return {
                        ...note,
                        archived: !isArchived
                    }
                } else {
                    return {
                        ...note
                    }
                }
            })

            return {
                ...prevState,
                notes: notes
            }
        })
    }

    render(){
        

        return (
            <>
                <NotesAppHeader onUpdateSearchQuery={this.updateSearchQuery}/>
                <NotesAppBody notes={this.state.notes} onArchive={this.onArchiveEventHandler} onDelete={this.onDeleteEventHandler} onAddNote={this.addNote} searchQuery={this.state.searchQuery}/>
            </>
        )
        
    }
}

export default NotesApp 