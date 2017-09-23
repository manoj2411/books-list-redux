import React from 'react';
import {connect} from 'react-redux';


class BookDetail extends React.Component {

  render () {
    if (!this.props.activeBook) {
      return <div>Select a book to get started!</div>;
    }
    return (
      <p>
        Book details:
        { this.props.activeBook.title }
      </p>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetail);
