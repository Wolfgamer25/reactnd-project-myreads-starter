import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import _ from 'lodash'
import Search from './Search'
import ListBookContent from './List-book-content'

class BooksApp extends React.Component {
  state = {
    books:[],
    search:[]
  }
  componentDidMount(){
    this.getBooks();
  }
  getBooks = () => {
    BooksAPI.getAll()
    .then((books) => {
      console.log(books)
      this.setState(() => ({
        books
      }))
    })
  }
  updateBook = (book, shelf) => {
    console.log(book, shelf)
    BooksAPI.update(book, shelf)
    .then((books) =>{
      console.log(books)
      this.getBooks()
    })
  }
  searchBook = (search) => {
    BooksAPI.search(search)
    .then((books) =>{
      console.log(books)
      this.setState(() =>({
        search: books
      }))
    })
  }
  render() {
    const searchBook = _.debounce((search) => {this.searchBook(search)}, 400)
    return (
      <div className="app">
        <Route path='/search' render={()=>(
            <Search updateBook={this.updateBook} books={this.state.books} results={this.state.search} search={searchBook}/>
        )} />
      <Route exact path="/" render={()=>(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ListBookContent updateBook={this.updateBook} books={this.state.books} />
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      )} />
      </div>
    )
  }
}

export default BooksApp
