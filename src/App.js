import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './Components/MyReads'
import Search from './Components/Search'
import { getAll, update } from './BooksAPI'

import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class BooksApp extends React.Component {

  state = {
    books: [],
  }

  componentDidMount() {
      getAll().then((books) => {
        this.setState({ books });
      });
    }

    moveBook = (book, shelf) => {
      if(this.state.books) {
        update(book, shelf).then(() => {
          book.shelf = shelf;
          this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([ book ])
          }))
        })
      }
    }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <MyReads
              bookShelf = {this.state.books}
              moveBook = {this.moveBook}
            />
          )}/>
          <Route exact path="/search" render={() => (
            <Search
              bookShelf = {this.state.books}
              moveBook = {this.moveBook}
            />
          )}/>
        </Switch>

      </div>
    )
  }
}

export default withRouter(BooksApp)
