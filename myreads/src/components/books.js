import React from "react";
//import * as BooksAPI from "../BooksAPI";
//import { Link } from "react-router-dom";
class Books extends React.Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${this.props.book.imageLinks &&
                  this.props.book.imageLinks.smallThumbnail}")`
              }}
            />
            <div className="book-shelf-changer">
              <select
                value={this.props.book.shelf || "none"}
                onChange={e => {
                  this.props.updateBook(this.props.book, e.target.value);
                }}
              >
                <option disabled value="move">
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">
            {this.props.book.authors || "Unknown Author"}
          </div>
        </div>
      </li>
    );
  }
}
export default Books;
