import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Books from "./books";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchres: [],
      books: []
    };
  }
  componentDidMount() {
    BooksAPI.getAll().then(response => {
      console.log(response);
      this.setState({ books: response });
    });
  }
  updateSearchQuery = value => {
    this.setState({ query: value }, this.searchSubmit);
  };

  searchSubmit() {
    if (
      this.state.query === " " ||
      this.state.query === undefined ||
      this.state.query === null
    ) {
      this.setState({ searchres: [] });
    }
    BooksAPI.search(this.state.query.trim()).then(response => {
      console.log(response);
      if (!response || response.error) {
        return this.setState({ searchres: [] });
      } else {
        response.forEach(b => {
          let index = this.state.books.filter(boo => boo.id === b.id);
          if (index[0]) {
            b.shelf = index[0].shelf;
          }
        });
        return this.setState({ searchres: response });
      }
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
        <div className="search-books">
          {" "}
          <div className="search-books-bar">
            {" "}
            <Link to="/" className="close-search">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={evt => {
                  this.updateSearchQuery(evt.target.value);
                }}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.searchres.map((book, key) => (
                <Books updateBook={this.updatebooks} book={book} key={key} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
