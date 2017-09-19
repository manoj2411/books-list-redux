import React from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {

  renderList() {
    return (
      this.props.books.map((book) => (
        <li
          key={book.title}
          onClick={() => { this.props.selectBook(book) } }
          className="list-group-item">
          {book.title}
        </li>
      ))
    );
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
        <p>{this.props.activeBook && this.props.activeBook.title }</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books,
    activeBook: state.activeBook
  };
}

// Anything returned from this fucntion will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all
  // of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

