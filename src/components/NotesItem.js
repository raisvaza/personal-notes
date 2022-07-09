import React from 'react'
import { showFormattedDate } from '../utils/index'

class NotesItem extends React.Component {
    constructor(props){
        super(props)

        this.onDeleteNoteItem = this.onDeleteNoteItem.bind(this)
        this.onArchiveNoteItem = this.onArchiveNoteItem.bind(this)
    }
    
    onDeleteNoteItem(event){
        this.props.onDelete(this.props.item.id)
    }

    onArchiveNoteItem(event){
        this.props.onArchive(this.props.item.id)
    }

    render(){
        return (
            <div className='note-item'>
            <div className='note-item__content'>
                <h2 className='note-item__title'>{this.props.item.title}</h2>
                <p className='note-item__date'>{showFormattedDate(this.props.item.createdAt)}</p>
                <p className='note-item__body'>{this.props.item.body}</p>
            </div>
            <div className='note-item__action'>
                <button className='note-item__delete-button' onClick={this.onDeleteNoteItem}>Delete</button>
                <button className='note-item__archive-button' onClick={this.onArchiveNoteItem}>{this.props.item.archived? "Pindahkan" : "Arsipkan"}</button>
            </div>
            
        </div>
        )
    }
}

export default NotesItem;