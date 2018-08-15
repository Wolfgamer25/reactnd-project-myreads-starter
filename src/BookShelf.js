import React from 'react'

import BookList from './BookList'

function BookShelf(props){
  return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.title}</h2>
          <div className="bookshelf-books">
            <BookList category={props.category} updateBook={props.updateBook} books={props.books} />
          </div>
        </div>
  )
}

export default BookShelf;
