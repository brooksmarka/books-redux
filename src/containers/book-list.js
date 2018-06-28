import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
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
  return {
    books: state.books //this is the connection between redux and your container along with connect
  };
}

export default connect(mapStateToProps)(BookList); //connect takes a function and component and produces a contianer
