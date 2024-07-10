import React from 'react';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
    // this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeTitleHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onChangeBodyHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  render() {
    return (
      <form action="" onSubmit={this.props.addNotes}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.onChangeTitleHandler}
        />
        <textarea
          name=""
          id=""
          value={this.state.body}
          onChange={this.onChangeBodyHandler}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NotesInput;
