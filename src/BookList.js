import React from 'react';
import Book from './Book';

function BookList(props){
  const {updateBook, shelfBooks, books, category} = props
  function RenderBook(){
    return books.map((book) => {
      //returns the books in the shelfs
      if(book.shelf){
        if(category === book.shelf){
          return (<Book key={book.id} updateBook={updateBook} book={book} />)
        }
      }else{
        //if the books don't have a shelf
        for(const shelfBook of shelfBooks) {
          if(shelfBook.id === book.id){
            //replace the search book with a shelf book so it can be assigned to  a shelf
            return (<Book key={shelfBook.id} updateBook={updateBook} book={shelfBook} />)
          }
        }
      //if the book isn't assigned to a current shelf return the search result book
       return (<Book key={book.id} updateBook={updateBook} book={book} />)
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
