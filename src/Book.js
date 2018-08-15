import React from 'react'
import BookButton from './BookButton'

function Book(props){
  const { book } = props
  return(
    <li>
    <div className="book">
      <div className="book-top">
      {console.log('search', book)}
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+book.imageLinks.thumbnail +')' }}></div>
        <BookButton selectedShelf={book.shelf} book={book} updateBook={props.updateBook} />
      </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  )

}

export default Book;
