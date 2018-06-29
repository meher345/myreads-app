import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import Book from './Book'



class Shelf extends React.Component {


  render() {

    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map( book => (
                  <li key={ book.id }>
                    <Book
                      book={ book }
                      moveBook={this.props.moveBook}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf

// <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
