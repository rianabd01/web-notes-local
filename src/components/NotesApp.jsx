import React from 'react';
import { getNotesData } from '../utils/getNotesData';
import { getArchivedNotes } from '../utils/getArchivedNotes';
import NotesInput from './NotesInput';
import NotesCard from './Notes';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotesData(),
      archived: getArchivedNotes(),
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onRemoveHandler = this.onRemoveHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    console.log('addnotes', this.state.notes);
    this.setState((prevState) => {
      return [
        ...prevState.notes,
        {
          id: +new Date(),
          created: new Date(),
          title: title,
          body: body,
          isArchived: false,
        },
      ];
    });
  }

  onRemoveHandler({ id }) {
    const notes = this.state.notes.filter((note) => note.id != id);
    this.setState({ notes });
  }

  onArchiveHandler({ id }) {
    const archived = this.state.notes.filter((note) => note.id === id);
    this.onRemoveHandler();
    this.setState({ archived });
  }

  render() {
    return (
      <>
        <h1>Notes</h1>
        <NotesInput addNotes={this.onAddNotesHandler} />
        <NotesCard
          notes={this.state.notes}
          onRemove={this.onRemoveHandler}
          onArchive={this.onArchiveHandler}
        ></NotesCard>
      </>
    );
  }
}

export { NotesApp };
