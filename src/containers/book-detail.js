import React from 'react';
import {connect} from 'react-redux';


class BookDetail extends React.Component {

  render () {
    return (
      <p>
        Book details:
        {this.props.activeBook && this.props.activeBook.title }
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
