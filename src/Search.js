import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookList from './BookList'

class Search extends Component{
  state = {
    value: '',
  }
  onInputChange = (value) => {
    this.setState(() => ({
      value: value
    }))
    this.props.search(value)
  }
  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange={(event) => this.onInputChange(event.target.value)} type="text" value={this.state.value} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <BookList updateBook={this.props.updateBook} shelfBooks={this.props.books} books={this.props.results} />
        </div>
      </div>
    )
  }
}

export default Search;
