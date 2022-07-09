import React from "react";

class NotesForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            note: {
                title: "",
                body: "",
            },
            titleMaxLength: 50,
            titleLength: 0,
        }

        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
        this.onBodyChange = this.onBodyChange.bind(this)
    }

    onAddNoteEventHandler(event){
        event.preventDefault()
        this.props.onAddNote(this.state.note)
        event.target.value = ""
        document.getElementsByClassName("note-input__title")[0].value = ""
        document.getElementsByClassName("note-input__body")[0].value = ""
        this.setState({
            note: {
                title: "",
                body: "",
            },
            titleMaxLength: 50,
            titleLength: 0,
        })
    }

    onTitleChange(event){
        this.setState((prevState) => {
            return {
                ...prevState,
                note: {
                    ...prevState.note,
                    title: event.target.value
                },
                titleLength: event.target.value.length,
            }
        })
    }

    onBodyChange(event){
        this.setState((prevState) => {
            return {
                ...prevState,
                note: {
                    ...prevState.note,
                    body: event.target.value
                }
            }
        })
    }

    render(){
        return (
            <form className="note-input" onSubmit={this.onAddNoteEventHandler}>
                <h2 className="">Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa karakter: {this.state.titleMaxLength-this.state.titleLength}</p>
                <input className="note-input__title"  maxLength={this.state.titleMaxLength} placeholder="Ini adalah judul..." type="text" onChange={this.onTitleChange}/>
                <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." onChange={this.onBodyChange}></textarea>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NotesForm;