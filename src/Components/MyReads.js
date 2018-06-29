import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
class MyReads extends React.Component {


  render() {

    const currentlyReadingBooks = this.props.bookShelf.filter((book) => {
			return book.shelf === 'currentlyReading';
		});
		const wantToReadBooks = this.props.bookShelf.filter((book) => {
			return book.shelf === 'wantToRead';
		});
		const readBooks = this.props.bookShelf.filter((book) => {
			return book.shelf === 'read';
		});

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelf shelfName="Currently Reading" books={currentlyReadingBooks} moveBook={this.props.moveBook} />
          <Shelf shelfName="Want To Read" books={wantToReadBooks} moveBook={this.props.moveBook} />
          <Shelf shelfName="Read" books={readBooks} moveBook={this.props.moveBook} />
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>


      </div>
    )
  }
}

export default MyReads
