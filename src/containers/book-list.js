import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux"; //takes return value from select book and makes sure itflows through reducers

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props in BookList
  return {
    books: state.books //this is returning an object with key of books assigning it from reducer
  };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch); //dispatch receives actions and spits them out to all the different reducers
}

//Promote BookList from a component to a container - it needs to know about this new dispatch method,
//selectBook.  Make it available as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList); //connect takes a function and component and produces a contianer
