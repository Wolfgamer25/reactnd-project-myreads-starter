import React from 'react'
import BookShelf from './BookShelf'

function ListBookContent(props){
  return(
    <div className="list-books-content">
      <div>
        <BookShelf category="currentlyReading" title="Currently Reading" updateBook={props.updateBook} books={props.books} />
        <BookShelf category="wantToRead" title="Want To Read" updateBook={props.updateBook} books={props.books} />
        <BookShelf category="read" title="Read" updateBook={props.updateBook} books={props.books} />
      </div>
    </div>
  )
}
export default ListBookContent;
