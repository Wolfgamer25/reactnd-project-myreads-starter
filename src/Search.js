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
        {
          //check if results is an array
        }
        {Array.isArray(this.props.results) ? (
          <BookList updateBook={this.props.updateBook} shelfBooks={this.props.books} books={this.props.results} />
        ) : (
          <h1>we currently only search these current key words 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',
           'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes',
          'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
           'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything',
            'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi',
            'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
            'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting',
            'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River',
             'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale',
              'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
              </h1>
            )
            }
        </div>
      </div>
    )
  }
}

export default Search;
