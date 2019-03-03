import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Rack from "./rack";

class HomePage extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(response => {
      this.setState({ books: response });
    });
  }
  updatebooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(bk => bk.id !== book.id).concat([book])
      }));
    });
  };
  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Rack
                updateBooks={this.updatebooks}
                name="Currently Reading"
                books={this.state.books.filter(
                  book => book.shelf === "currentlyReading"
                )}
              />
              <Rack
                updateBooks={this.updatebooks}
                name="Wish List"
                books={this.state.books.filter(
                  book => book.shelf === "wantToRead"
                )}
              />
              <Rack
                updateBooks={this.updatebooks}
                name="Read"
                books={this.state.books.filter(book => book.shelf === "read")}
              />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;

//{
/* <Rack
                name="Currently Reading"
                books={this.state.books.filter(
                  boook => boook.rack === "Currently Reading"
                )}
              />
              <Rack
                name="Want to Read"
                books={this.state.books.filter(
                  boook => boook.rack === "Want to Read"
                )}
              />
              <Rack
                name="Read"
                books={this.state.books.filter(boook => boook.rack === "Read")}
              /> */
//}
