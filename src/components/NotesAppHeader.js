import React from 'react';

class NotesAppHeader extends React.Component {
    constructor(props){
        super(props)

        this.updateSearchQuery = this.updateSearchQuery.bind(this)
    }

    updateSearchQuery(event){
        this.props.onUpdateSearchQuery(event.target.value)
    }

    render(){
        return (
            <div className='note-app__header'>
                <h1>Notes</h1>
                <input placeholder='Cari catatan...' onInput={this.updateSearchQuery}/>
            </div>
        )
    }
}

export default NotesAppHeader;