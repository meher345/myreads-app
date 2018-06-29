import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import { search } from '../BooksAPI'
import Book from './Book'
import { withRouter } from 'react-router'

class Search extends React.Component {

  state = {
    filter: '',
    books: []

  }

  render() {
    return (
      <div className="app">

          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={this.props.history.goBack}>Close</a>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  onChange={(e) => this.executeSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.map( book => (
                  <li key={ book.id }>
                    <Book
                      book={ book }
                      moveBook = {this.props.moveBook}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
      </div>
    )
  }
  executeSearch = (filter) => {
    if(!filter) {
      this.setState({ filter: '', books: []})
    } else {
      this.setState({ filter: filter.trim() })
      search(filter).then((books) => {
        if (books.error) {
          books = []
        }

        this.setState({books: books})
      })
    }
  }
}

export default withRouter(Search)
