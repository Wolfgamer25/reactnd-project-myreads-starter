import React from 'react'
import BookButton from './BookButton'

function Book(props){
  const { shelf, title, authors, imageLinks } = props.book
  return(
    <li>
    {console.log(props.book)}
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${imageLinks ? imageLinks.thumbnail : 'http://www.lmdrooms.com/img/gallery/1505720196.jpg'}')` }}></div>
        <BookButton selectedShelf={shelf} book={props.book} updateBook={props.updateBook} />
      </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  )

}

export default Book;
