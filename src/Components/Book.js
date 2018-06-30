import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'

const NO_COVER_IMAGE = (
  'https://evolve.elsevier.com/education/images/book-guides/covers/no-img-available.jpg'
);

class Book extends React.Component {

  updateBook(shelfType) {
    this.props.moveBook(this.props.book, shelfType)
  }

  render() {

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks !== undefined ? this.props.book.imageLinks.thumbnail: NO_COVER_IMAGE })`}}></div>
          <div className="book-shelf-changer">
            <select
              value={this.props.book.shelf ?
                      this.props.book.shelf :
                      'none'}
              onChange={(e) => this.updateBook(e.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>

      </div>
    )
  }
}

export default Book
