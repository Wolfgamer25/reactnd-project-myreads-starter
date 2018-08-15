import React from 'react';
import Book from './Book';

function BookList(props){
  const {updateBook, shelfBooks, books, category} = props
function RenderBook(){
  return books.map((book) => {
    if(book.shelf){
      if(category === book.shelf){
        console.log('book', book)
        return (<Book updateBook={updateBook} book={book} />)
      }
    }else{
      return shelfBooks.map((shelfBook) => {
        if(shelfBook.id === book.id){
          return (<Book updatedBook={updateBook} book={shelfBook} />)
        }
      })
    }
  })
}
  return(
    <ol className="books-grid">
      <RenderBook />
    </ol>
  )
}

export default BookList;
